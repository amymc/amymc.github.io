import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import popup from './popup';
import projects from './projects';
import menuItems from './menuitems';

const rootReducer = combineReducers({
  popup,
  projects,
  menuItems,
  routing: routerReducer
});

export default rootReducer;