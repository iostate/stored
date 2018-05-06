import  { createStore, applyMiddleware, compose } from 'redux';
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
// 3.a. add the redux devtools chrome extension to help tell if your store 
// and other stuff is working properly
const store = createStore(rootReducer, initialState, compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;