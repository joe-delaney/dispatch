import { RECEIVE_SEARCHED_USERS, CLEAR_USER_SEARCH_RESULTS, NAV_SEARCH_BAR, ALL_DMS_SEARCH_BAR, NEW_MESSAGE_SEARCH_BAR} from "../../actions/search_actions";
import { merge } from "lodash";

const initialState = {
    navSearchBar: {},
    allDMsSearchBar: {},
    newMessageSearchBar: {}
}

export const searchResultsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState
    switch (action.type) {
        case RECEIVE_SEARCHED_USERS:
            nextState = merge({}, state);
            if(action.component === NAV_SEARCH_BAR) {
                nextState.navSearchBar = action.users;
            } else if(action.component === ALL_DMS_SEARCH_BAR) {
                nextState.allDMsSearchBar = action.users;
            } else if(action.component === NEW_MESSAGE_SEARCH_BAR) {
                nextState.newMessageSearchBar = action.users;
            }
            return nextState;
        case CLEAR_USER_SEARCH_RESULTS:
            nextState = merge({}, state);
            if (action.component === NAV_SEARCH_BAR) {
                nextState.navSearchBar = {};
            } else if (action.component === ALL_DMS_SEARCH_BAR) {
                nextState.allDMsSearchBar = {};
            } else if (action.component === NEW_MESSAGE_SEARCH_BAR) {
                nextState.newMessageSearchBar = {};
            }
            return nextState;
        default:
            return state;
    }
}