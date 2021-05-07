import {createStore, applyMiddleware} from "redux"
import demo from "./reducers"
import {logger} from "./middleware"
import thunk from "redux-thunk"
import createSaga from "redux-saga"
import rootSaga from "./sagas"

var sagaMiddleware = createSaga()

var middleware = applyMiddleware(logger, thunk)

export default createStore(demo, middleware)