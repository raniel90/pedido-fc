import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { createConnection } from 'ionic-orm-2';
import { getConnectionManager } from 'ionic-orm-2';

@Injectable()
export class ORMProvider {
  private ORMDriverType: string = "ionic-sqlite";
  private ORMDatabaseName: string = "fc-orm.db";

  constructor(private platform: Platform) {
    if (!platform.is("cordova")) {
      this.ORMDriverType = "websql";
      console.info("[TRINITY ORM] Using websql driver");
    } else {
      console.info("[TRINITY ORM] Using ionic-sqlite driver");
    }
  }

  async initDB(domains: any[]): Promise<any> {
    let domainsArray = [];
    for (let i = 0; i < domains.length; i++) {
      if (domains[i].entity != null) {
        domainsArray.push(domains[i].entity);
      }
    }

    let options: any = {
      name: "default",
      driver: {
        type: this.ORMDriverType,
        database: this.ORMDatabaseName,
        extra: {
          version: 1,
          description: "database",
          size: 2 * 1024 * 1024
        }
      },
      entities: domainsArray,
      logging: {
        logFailedQueryError: false,
        logQueries: false,
        logSchemaCreation: false,
        logOnlyFailedQueries: false
      },
      autoSchemaSync: true
    };

    await createConnection(options)
      .then(async connection => {
        console.warn("Connection Database Success!");
      })
      .catch(error => console.warn("Error: ", error));
  }

  async findAll(repository: any): Promise<any[]> {
    const entityForAlias = new repository();

    try {
      const data = await this.getRepository(repository).find();
      return data;
    } catch (err) {
      console.warn(
        "Ocorreu um erro em findAll para a entidade " +
          entityForAlias.constructor.name +
          ": " +
          err.message
      );
    }
  }

  async insert(repository: any, entity: any): Promise<any> {
    try {
      const managedEntity = await this.getRepository(repository).persist(
        entity
      );
      return managedEntity;
    } catch (err) {
      console.warn(
        "Ocorreu um erro em insert para a entidade " +
          entity.constructor.name +
          ": " +
          err.message
      );
    }
  }

  getRepository(repository: any) {
    return this.getEntityManager().getRepository(repository);
  }

  getEntityManager() {
    try {
      const connectionManager = getConnectionManager().get("default");
      if (connectionManager != null) {
        return connectionManager;
      }
    } catch (err) {
      console.warn("Error EntityManager: " + err.message);
    }
  }
}
