import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_USER } from "../../actions/user_actions";
import { RECEIVE_INFO } from "../../actions/channel_actions";

export const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser;
            return nextState;
        case RECEIVE_USER: 
            //This should add the selected user to state so we can access their info
            nextState[action.user.id] = action.user;
            return nextState;
        case RECEIVE_INFO:
            // Add the relevant users to state when needed (i.e. loading a channel)
            Object.values(action.info.members).forEach(member => {
                //Don't update current user in state
                // if(member.id !== action.info.currentUser.id) {
                    nextState[member.id] = member
                // }
            });
            return nextState;
        default:
            return state;
    }
}