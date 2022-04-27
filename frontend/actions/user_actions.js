import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
});

//fetch selected user thunk action
export const fetchUser = (userId) => dispatch => UserAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveUser(user)))

//update user thunk action
export const updateUser = (user) => dispatch => UserAPIUtil.updateUser(user)
    .then(user => dispatch(receiveUser(user)))
