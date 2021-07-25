import { combineReducers } from "redux";
import { todoReducer } from "modules/todo/reducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
});
