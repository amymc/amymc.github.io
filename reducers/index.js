import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projects from './projects';
import menuItems from './menuitems';

const rootReducer = combineReducers({
  projects,
  menuItems,
  routing: routerReducer
});

export default rootReducer;