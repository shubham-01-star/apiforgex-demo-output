class User {
  id: number;
  username: string;

  constructor(
    readonly id: number,
    required username: string
  ) {}

  static fromJson(json: any): User | undefined {
    return json ? new User(json.id, json.username) : undefined;
  }

  toJson(): { id: number; username: string } {
    return { id: this.id, username: this.username };
  }
}