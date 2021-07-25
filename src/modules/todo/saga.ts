import { call, put } from "redux-saga/effects";
import { saga } from "core/decorators/saga";
import { TodoService } from "modules/todo/service";
import { takeLatest } from "core/decorators/takeLatest";
import { getTodosAction, setTodosAction } from "modules/todo/actions";

@saga()
export class TodoSaga {
  readonly #todoService: TodoService;

  constructor(todoService: TodoService) {
    this.#todoService = todoService;
  }

  @takeLatest(getTodosAction)
  *fetchTodos() {
    const todos = yield call(this.#todoService.getTodos);

    yield put(setTodosAction(todos));
  }
}
