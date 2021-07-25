import { injectable } from "tsyringe";

@injectable()
export class TodoService {
  static readonly URL = "https://jsonplaceholder.typicode.com/todos/1";

  async getTodos() {
    const response = await fetch(TodoService.URL);

    return await response.json();
  }
}
