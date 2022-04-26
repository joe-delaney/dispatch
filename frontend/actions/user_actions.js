import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_SELECTED_USER = "RECEIVE_SELECTED_USER"

export const receiveSelectedUser = (user) => ({
    type: RECEIVE_SELECTED_USER,
    user
});

//fetch selected user thunk action
export const fetchUser = (userId) => dispatch => UserAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveSelectedUser(user)))