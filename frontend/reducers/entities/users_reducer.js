import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_USER } from "../../actions/user_actions";

export const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USER: 
            //This should add the selected user to state so we can access their info
            let nextState = Object.assign({}, state);
            nextState[action.user.id] = action.user;
            return nextState;
        default:
            return state;
    }
}