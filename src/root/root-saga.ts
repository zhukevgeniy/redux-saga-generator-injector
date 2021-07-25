import { container } from "tsyringe";
import { all } from "redux-saga/effects";
import { TodoSaga } from "modules/todo/saga";

export function* rootSaga() {
  yield all([container.resolve(TodoSaga)]);
}
