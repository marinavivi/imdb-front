import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const enhancers = [applyMiddleware(...middleware)];
const store = createStore(rootReducer, {}, compose(...enhancers));

sagaMiddleware.run(rootSaga);

export default store;
