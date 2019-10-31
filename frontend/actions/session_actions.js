import { signup, login, logout } from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"

// a template for the reducer, to 
//    1) tell it what action to take
//    2) gives it the information needed to take that action
const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({

})

export const signup = user => dispatch => signup(user)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = user => dispatch => login(user)
  .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch = logout()
  .then(() => dispatch(logoutCurrentUser()));
