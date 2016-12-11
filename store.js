import { createStore, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import rootReducer from './reducers';

import projects from './data/projects';

const defaultState = {
  projects
};

const store = createStore(
  rootReducer,
  defaultState
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
