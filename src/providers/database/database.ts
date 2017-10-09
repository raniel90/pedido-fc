import { Injectable } from '@angular/core';
import { SqlDatabase } from 'ionix-sqlite';

@Injectable()
export class DatabaseProvider {
  private dbPromise: Promise<SqlDatabase>;

  initDB() {
    const itemTable = `
      CREATE TABLE IF NOT EXISTS item (
        nome VARCHAR(100)
      )`;

    this.dbPromise = SqlDatabase.open("fc.db", [itemTable]);
  }

  delete(query): Promise<boolean> {
    return this.dbPromise
      .then(db => db.execute(query))
      .then(resultSet => {
        return true;
      })
      .catch(err => {
        return false;
      });
  }

  executeQuery(query): Promise<any> {
    return this.dbPromise.then(db => db.execute(query)).then(resultSet => {
      const items = [];
      for (let i = 0; i < resultSet.rows.length; i++) {
        const row = resultSet.rows.item(i);
        items.push(row);
      }
      return items;
    });
  }

  constructor() {}
}
