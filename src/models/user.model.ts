class UserModel {
  id: number;
  email: string;

  constructor(id: number, email: string) {
    this.id = id;
    this.email = email;
  }
}

interface UserModelInterface extends UserModel {
  save(): Promise<void>;
  find(): Promise<UserModel[]>;
}

class UserDB {
  private userModel: UserModelInterface;

  constructor(userModel: UserModelInterface) {
    this.userModel = userModel;
  }

  async save(user: UserModel): Promise<void> {
    // TO DO: implement save logic
  }

  async find(): Promise<UserModel[]> {
    // TO DO: implement find logic
  }
}

class User {
  id: number;
  email: string;

  constructor(id: number, email: string) {}

  async save(): Promise<void> {}
  async find(): Promise<UserModel[]> {}
}