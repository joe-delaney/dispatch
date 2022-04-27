import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_USER, RECEIVE_USERS } from "../../actions/user_actions";

export const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_USER: 
            //This should add the selected user to state so we can access their info
            nextState = Object.assign({}, state);
            nextState[action.user.id] = action.user;
            return nextState;
        case RECEIVE_USERS:
            return action.users;
        default:
            return state;
    }
}