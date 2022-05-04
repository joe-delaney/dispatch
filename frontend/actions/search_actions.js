import * as SearchAPIUtil from "../util/search_api_util";

//Type key words
export const RECEIVE_SEARCHED_USERS = "RECEIVE_SEARCHED_USERS";
export const CLEAR_USER_SEARCH_RESULTS = "CLEAR_USER_SEARCH_RESULTS";

//Component key words
export const NAV_SEARCH_BAR = "NAV_SEARCH_BAR";
export const ALL_DMS_SEARCH_BAR = "ALL_DMS_SEARCH_BAR";
export const NEW_MESSAGE_SEARCH_BAR = "NEW_MESSAGE_SEARCH_BAR";

export const receiveSearchedUsers = (users, component) => ({
    type: RECEIVE_SEARCHED_USERS,
    component,
    users
});

export const clearUserSearchResults = (component) => ({
    type: CLEAR_USER_SEARCH_RESULTS,
    component
});

//search user thunk action
export const searchUsers = (query, component) => dispatch => SearchAPIUtil.fetchUsers(query)
    .then(users => dispatch(receiveSearchedUsers(users, component)))
