import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'datetime' })
  dueDate: Date | null;

  constructor(id?: string, title?: string, description?: string, dueDate?: Date) {
    this.id = id || uuidv4();
    if (title) this.title = title;
    if (description) this.description = description;
    if (dueDate) this.dueDate = dueDate;
  }
}

// Function to generate a random UUID
function uuidv4(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

function getDateTime(dateString: string): Date {
  const pattern = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/;
  if (!pattern.test(dateString)) {
    throw new Error('Invalid date format');
  }

  return new Date(
    parseInt(dateString.substring(0, 4)),
    parseInt(dateString.substring(5, 7)) - 1,
    parseInt(dateString.substring(8, 10))
  );
}