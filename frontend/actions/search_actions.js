import * as SearchAPIUtil from "../util/search_api_util";

export const RECEIVE_SEARCHED_USERS = "RECEIVE_SEARCHED_USERS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const receiveSearchedUsers = (users) => ({
    type: RECEIVE_SEARCHED_USERS,
    users
});

export const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS
});

//search user thunk action
export const searchUsers = (query) => dispatch => SearchAPIUtil.fetchUsers(query)
    .then(users => dispatch(receiveSearchedUsers(users)))