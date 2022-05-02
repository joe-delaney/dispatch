import * as SessionAPIUtil from "../util/session_api_util";
import { fetchChannels } from "./channel_actions";
import { fetchGroups } from "./group_actions";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

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

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});

//Login thunk action
export const login = (user) => dispatch => SessionAPIUtil.login(user)
    .then(currentUser => {
        dispatch(receiveCurrentUser(currentUser));
        dispatch(fetchChannels());
        dispatch(fetchGroups());
    })

//Signup thunk action
export const signup = (user) => dispatch => SessionAPIUtil.signup(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)))

//Logout thunk action
export const logout = () => dispatch => SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))