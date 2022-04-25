import { RECEIVE_SEARCHED_USERS, CLEAR_SEARCH_RESULTS } from "../../actions/search_actions";
import { merge } from "lodash";

const initialState = {
    users: {},
    channels: {}
}

export const searchResultsReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCHED_USERS:
            let nextState = merge({}, state);
            nextState.users = action.users;
            return nextState;
        case CLEAR_SEARCH_RESULTS:
            return initialState;
        default:
            return state;
    }
}