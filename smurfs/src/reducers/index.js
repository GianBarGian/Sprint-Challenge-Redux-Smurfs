import * as types from '../actions/index';

export function smurfs(state = [], action) {
  switch (action.type) {
    case types.GET_SMURFS:
      return action.payload;
    case types.ADD_SMURF:
      return action.payload;
    default:
      return state;
  }
}

export function error(state = null, action) {
  switch (action.type) {
    case types.ERROR:
      return action.payload;
    default:
      return state;
  }
}

export function spinner(state = false, action) {
  switch (action.type) {
    case types.SPINNER_ON:
     return true;
    case types.SPINNER_OFF:
      return false;
    default: 
      return state;
  }
}
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
