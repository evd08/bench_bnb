import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER }  from '../actions/session_actions'


// responsible for managing slices of state...sessions_reducer manages the session: {...} slice of state
// given the current state and an action, this reducer will return what the next state should be

export const sessionReducer = (state = {}, action) => {
  //we freeze then assign here, to prevent the original state from being modified
  Object.freeze(state); // state = {id: null}
  let nextState = Object.assign({}, state); // nextState = {id: null}

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      nextState.id = action.currentUser.id; // nextState = {id: action.currentUser.id}
      return nextState;
    case LOGOUT_CURRENT_USER:
      nextState.id = null;
      return nextState;
    default:
      return state;
  }
};