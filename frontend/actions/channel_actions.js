import * as ChannelAPIUtil from "../util/channel_api_util";

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const  RECEIVE_INFO = "RECEIVE_INFO";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";

const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
})

const receiveChannelInfo = (info) => ({
    type: RECEIVE_INFO,
    info
})

const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
})

export const fetchChannels = () => dispatch => ChannelAPIUtil.fetchChannels()
    .then(channels => dispatch(receiveChannels(channels)));

export const fetchChannelInfo = (channelId) => dispatch => ChannelAPIUtil.fetchChannelInfo(channelId)
    .then(info => dispatch(receiveChannelInfo(info)));

export const createChannel = channel => dispatch => ChannelAPIUtil.createChannel(channel)
    .then(info => { dispatch(receiveChannel(info.channel))});