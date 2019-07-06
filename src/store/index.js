// store creation

// Add applyMiddleware to use Redux thunk
import { createStore, compose, applyMiddleware } from 'redux';
// import thunk
import thunk from 'redux-thunk';
import reducer from './reducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Resolving error 'several stores' (Redux dev tool)
// https://stackoverflow.com/questions/52946133/unable-to-use-react-native-debugger-after-updating-react-native

const store = createStore(
  reducer, /* preloadedState, */
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancer(applyMiddleware(thunk)),
);
/* eslint-enable */

// export
export default store;
