import { Entity, Column, PrimaryGeneratedColumn, Date } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  title: string;

  @Column({ type: 'varchar', length: 200 })
  description?: string;

  @Column({ type: 'datetime' })
  dueDate?: Date;
}