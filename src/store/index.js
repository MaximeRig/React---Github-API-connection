// store creation

// Add applyMiddleware to use Redux thunk
import { createStore, compose, applyMiddleware } from 'redux';
// import thunk
import thunk from 'redux-thunk';
import reducer from './reducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(
  reducer, /* preloadedState, */
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancer(applyMiddleware(thunk)),
);
/* eslint-enable */

// export
export default store;
