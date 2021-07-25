import { createAction } from "typesafe-actions";

export const getTodosAction = createAction("get_todos")();

export const setTodosAction = createAction("set_todos")<{ id: string }[]>();
