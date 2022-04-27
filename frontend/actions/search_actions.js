import * as SearchAPIUtil from "../util/search_api_util";

export const RECEIVE_SEARCHED_USERS = "RECEIVE_SEARCHED_USERS";
export const CLEAR_USER_SEARCH_RESULTS = "CLEAR_USER_SEARCH_RESULTS";

export const receiveSearchedUsers = (users) => ({
    type: RECEIVE_SEARCHED_USERS,
    users: users.users
});

export const clearUserSearchResults = () => ({
    type: CLEAR_USER_SEARCH_RESULTS
});

//search user thunk action
export const searchUsers = (query) => dispatch => SearchAPIUtil.fetchUsers(query)
    .then(users => dispatch(receiveSearchedUsers(users)))
