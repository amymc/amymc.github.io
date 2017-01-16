import * as types from '../constants/actiontypes';

function projects(state = [], action) {
  console.log('state', state, 'action', action);
  switch (action.type) {

    case types.OPEN_PROJECT:
       return state.map(project =>
        project.title === action.title ?
          { ...project, isOpen: true } :
          project
      )

    case types.CLOSE_PROJECT:
      return state.map(project =>
        project.title === action.title ?
          { ...project, isOpen: false } :
          project
      )

      default:
        return state;
    }
}

export default projects;

