import { RECEIVE_CHANNELS, RECEIVE_CHANNEL, RECEIVE_SUBSCRIBED_USER, RECEIVE_UNSUBSCRIBED_USER, RECEIVE_INFO, REMOVE_CHANNEL } from "../../actions/channel_actions";

const channelsReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_CHANNELS:
            return action.channels;
        case RECEIVE_CHANNEL:
            nextState[action.channel.id] = action.channel;
            return nextState;
        case RECEIVE_INFO:
            if(action.info.channel) {
                nextState[action.info.channel.id] = action.info.channel;
            }
            return nextState;
        case RECEIVE_SUBSCRIBED_USER:
            nextState[action.channelId].channelMemberIds.push(action.userId);
            return nextState;
        case RECEIVE_UNSUBSCRIBED_USER:
            let idx = nextState[action.channelId].channelMemberIds.indexOf(action.userId)
            nextState[action.channelId].channelMemberIds.splice(idx, 1);
            return nextState;
        case REMOVE_CHANNEL:
            delete nextState[action.channelId];
            return nextState;
        default:
            return state;
    }
}

export default channelsReducer;