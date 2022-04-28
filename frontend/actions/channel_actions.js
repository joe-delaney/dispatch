import * as ChannelAPIUtil from "../util/channel_api_util";
import { receiveUsers } from "./user_actions";

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const  RECEIVE_INFO = "RECEIVE_INFO"

const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
})

const receiveChannelInfo = (info) => ({
    type: RECEIVE_INFO,
    info
})

export const fetchChannels = () => dispatch => ChannelAPIUtil.fetchChannels()
    .then(channels => dispatch(receiveChannels(channels)));

export const fetchChannelInfo = (channelId) => dispatch => ChannelAPIUtil.fetchChannelInfo(channelId)
    .then(info => dispatch(receiveChannelInfo(info)));