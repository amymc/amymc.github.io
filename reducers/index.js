import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import menuItems from './menuitems';
import popups from './popups';
import projects from './projects';
import sideProjects from './sideprojects';

const rootReducer = combineReducers({
  menuItems,
  popups,
  sideProjects,
  projects,
  routing: routerReducer
});

export default rootReducer;