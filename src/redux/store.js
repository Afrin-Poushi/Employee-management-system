// import {createStore} from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import userSaga from "./userSaga";
import createSagaMiddleware from "redux-saga";

// const store = createStore(rootReducer);
/** middleware will have arrow function and return as array because
 * there could be more than one sagaMiddleware
 */
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(userSaga);

export default store;
