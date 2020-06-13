import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from './Reducers/Login';
let store;

const initialState = {};
const middleware = [thunk];
const rootReducer = combineReducers({
    auth: LoginReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === 'development') {
    store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    )
} else {
    store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}

export default store;