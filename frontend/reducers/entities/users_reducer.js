import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_USER } from "../../actions/user_actions";

export const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState = Object.assign({}, state);
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        case RECEIVE_USER: 
            //This should add the selected user to state so we can access their info
            nextState = Object.assign({}, state);
            nextState[action.user.id] = action.user;
            return nextState;
        default:
            return state;
    }
}