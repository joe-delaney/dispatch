import { RECEIVE_INFO } from "../../actions/channel_actions";

export const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_INFO:
            // Add the relevant messages to state when needed (i.e. loading a channel)
            if(action.info.messages) {
                Object.values(action.info.messages).forEach(message => {
                    nextState[message.id] = message
                });
            }
            return nextState;
        default:
            return state;
    }
}