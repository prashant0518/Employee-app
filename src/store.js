
import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootreducer from "./reducers/rootreducer";

const store = createStore(rootreducer, applyMiddleware(thunk, logger))

export default store;