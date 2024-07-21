import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class ModularCommands {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ type: "jsonb", array: false })
  data: object;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  insert_at: string;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updated_at: string;
}
