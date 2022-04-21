import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../../actions/session_actions";

export const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}