import { RECEIVE_SEARCHED_USERS, CLEAR_USER_SEARCH_RESULTS, NAV_SEARCH_BAR } from "../../actions/search_actions";
import { merge } from "lodash";

const initialState = {
    users: {},
    navSearchBar: {},
    allDMsSearchBar: {},
    newMessageSearchBar: {}
}

export const searchResultsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState
    switch (action.type) {
        case RECEIVE_SEARCHED_USERS:
            if(action.component === NAV_SEARCH_BAR) {
                nextState = merge({}, state);
                nextState.navSearchBar = action.users;
            }
            return nextState;
        case CLEAR_USER_SEARCH_RESULTS:
            if (action.component === NAV_SEARCH_BAR) {
                nextState = merge({}, state);
                nextState.navSearchBar = {};
            }
            return nextState;
        default:
            return state;
    }
}