import { createStore } from 'redux';
import { reducer, initialState } from './reducer.js';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(reducer, initialState, devToolsEnhancer());

export default store;
