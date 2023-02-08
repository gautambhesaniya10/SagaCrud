import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import UserReducer from "./action/UserAction";
import { rootSagaWraper } from "./rootSaga";

const reducer = combineReducers({
    userData: UserReducer,
  });

const SagaMiddleWare =  createSagaMiddleware();

const middleWares = [SagaMiddleWare];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleWares)));

SagaMiddleWare.run(rootSagaWraper);

export default store;
