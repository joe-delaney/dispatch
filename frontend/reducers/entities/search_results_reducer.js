import { RECEIVE_SEARCHED_USERS, CLEAR_SEARCH_RESULTS, RECEIVE_CHANNELS } from "../../actions/search_actions";
import { merge } from "lodash";

const initialState = {
    users: {},
    channels: {}
}

export const searchResultsReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState
    switch (action.type) {
        case RECEIVE_SEARCHED_USERS:
            nextState = merge({}, state);
            nextState.users = action.users;
            return nextState;
        case CLEAR_SEARCH_RESULTS:
            return initialState;
        case RECEIVE_CHANNELS:
            nextState = merge({}, state);
            nextState.channels = action.channels
            return nextState;
        default:
            return state;
    }
}