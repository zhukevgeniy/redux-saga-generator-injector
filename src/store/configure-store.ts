import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

export function configureStore(rootReducer, rootSaga) {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = applyMiddleware(sagaMiddleware);

  const store = createStore(rootReducer, middlewares);

  sagaMiddleware.run(rootSaga);

  return store;
}
