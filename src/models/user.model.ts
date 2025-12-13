import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 32 })
  username: string;

  async beforeInsert() {
    this.username = await User.generateUniqueUsername();
  }

  static generateUniqueUsername(): Promise<string> {
    return User.query
      .select('username', 'count')
      .from('users')
      .where('username = $1', this.username)
      .count(1)
      .then(result => result[0].count > 0 ? generateUniqueUsername() : this.username);
  }
}