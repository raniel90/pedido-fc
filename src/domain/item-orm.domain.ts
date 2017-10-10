import { Column, PrimaryColumn, Table } from 'ionic-orm-2';

@Table()
export class ItemOrm {
  @PrimaryColumn("int") id: number;
  @Column({ nullable: true })
  name: string;
}
