import { RECEIVE_SEARCHED_USERS, CLEAR_USER_SEARCH_RESULTS, RECEIVE_CHANNELS } from "../../actions/search_actions";
import { merge } from "lodash";

const initialState = {
    users: {}
}

export const searchResultsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState
    switch (action.type) {
        case RECEIVE_SEARCHED_USERS:
            nextState = merge({}, state);
            nextState.users = action.users;
            return nextState;
        case CLEAR_USER_SEARCH_RESULTS:
            nextState = merge({}, state);
            nextState.users = {};
            return nextState;
        default:
            return state;
    }
}