import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'; 

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  title: string;

  @Column({ type: 'text' })
  description?: string;
}