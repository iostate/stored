import  { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// bring in the rootReducer from the reducers/index.js
// since there is no other file other than index.js we don't
// have to specify any further in the path
import rootReducer from './reducers'
const initialState = {};

const middleware = [thunk];

// parameter options:
// 1. root reducer
// 2.  initial state 
// 3. enchancers (applyMiddleware)
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;