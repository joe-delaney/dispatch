import { RECEIVE_CHANNELS } from "../../actions/channel_actions";

const channelsReducer = (state={}, action) => {
    switch(action.type) {
        case RECEIVE_CHANNELS:
            return action.channels;
        default:
            return state;
    }
}

export default channelsReducer;