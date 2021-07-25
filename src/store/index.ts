import { rootReducer } from "root/root-reducer";
import { rootSaga } from "root/root-saga";
import { configureStore } from "store/configure-store";

export const store = configureStore(rootReducer, rootSaga);
