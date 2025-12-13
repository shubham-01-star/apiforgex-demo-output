export class User {
  public username: string;
  public email: string;

  constructor(username: string, email: string) {
    this.username = username;
    this.email = email;
  }

  static createFromDatabaseRow(row: any): User {
    const user = new User(row['username'], row['email']);
    return user;
  }

  static getTableName(): string {
    return 'users';
  }
}