/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

const middlewares = [thunk];

// Exporting a store to be used in Provider wrapping our App
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
