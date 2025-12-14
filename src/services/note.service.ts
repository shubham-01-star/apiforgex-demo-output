import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Note } from '../entities/Note.entity';

@Entity()
export class NoteService {
  constructor(private readonly noteRepository: Repository<Note>) {}

  async create(note: Note) {
    return this.noteRepository.save(note);
  }

  async getAllNotes() {
    return this.noteRepository.find();
  }

  async getNoteById(id: number) {
    return this.noteRepository.findOne(id);
  }

  async updateNote(id: number, note: Partial<Note>) {
    const existingNote = await this.getNoteById(id);
    if (!existingNote) throw new Error('Note not found');
    return this.noteRepository.save({ ...existingNote, ...note });
  }

  async deleteNote(id: number) {
    return this.noteRepository.delete(id);
  }
}