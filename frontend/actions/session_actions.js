import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

//Login thunk action
export const login = (user) => dispatch => SessionAPIUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))

//Signup thunk action
export const signup = (user) => dispatch => SessionAPIUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))

//Logout thunk action
export const logout = () => dispatch => SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))