import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import recipesMiddleware from 'src/middlewares/recipesMiddleware';
import authMiddleware from 'src/middlewares/authMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(recipesMiddleware, authMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
