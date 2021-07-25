import { ActionType, createReducer } from "typesafe-actions";
import * as actions from "./actions";

interface TodoState {
  todos: { id: string }[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer<TodoState, ActionType<typeof actions>>(
  initialState
).handleAction(actions.setTodosAction, (state, { payload }) => {
  return {
    ...state,
    todos: state.todos.concat(payload),
  };
});
