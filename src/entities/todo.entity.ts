export class Todo {
  constructor(
    public id: number,
    public title: string,
    public description: string
  ) {}

  static fromEntity(entity: { id: number; title: string; description: string }): Todo {
    return new Todo(entity.id, entity.title, entity.description);
  }

  static fromJson(json: any): Todo {
    const todo = new Todo(0, '', '');
    todo.id = json.id;
    todo.title = json.title;
    todo.description = json.description;
    return todo;
  }
}

export default Todo;