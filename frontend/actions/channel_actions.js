import * as ChannelAPIUtil from "../util/channel_api_util";

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";

const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
})

export const fetchChannels = () => dispatch => ChannelAPIUtil.fetchChannels()
    .then(channels => dispatch(receiveChannels(channels)));