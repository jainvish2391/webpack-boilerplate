import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
//import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore() {
    let composeEnhancers

    if (process.env.NODE_ENV !== 'production') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)) : applyMiddleware(thunk)
    } else {
        composeEnhancers = applyMiddleware(thunk)
    }

    return createStore (
        rootReducer,
        composeEnhancers
    )
}