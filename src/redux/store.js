import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import globalReducer from './reducers/index'
import { watchAccessCode } from './sagas/index'

let sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware( logger, sagaMiddleware );

let store = createStore( globalReducer, middleware );
sagaMiddleware.run (watchAccessCode)
store.subscribe(() => {
    console.log(store.getState());
});

export default store;