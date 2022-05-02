import * as ChannelAPIUtil from "../util/channel_api_util";
import { subscribe } from "./subscription_actions";

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_INFO = "RECEIVE_INFO";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_SUBSCRIBED_USER = "RECEIVE_SUBSCRIBED_USER";
export const RECEIVE_UNSUBSCRIBED_USER = "RECEIVE_UNSUBSCRIBED_USER";

const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
})

export const receiveChannelInfo = (info) => ({
    type: RECEIVE_INFO,
    info
})

const receiveChannel = (channel) => ({
    type: RECEIVE_CHANNEL,
    channel
})

export const receiveSubscribedUser = (userId, channelId) => ({
    type: RECEIVE_SUBSCRIBED_USER,
    userId,
    channelId
})

export const receiveUnsubscribedUser = (userId, channelId) => ({
    type: RECEIVE_UNSUBSCRIBED_USER,
    userId,
    channelId
})


export const fetchChannels = () => dispatch => ChannelAPIUtil.fetchChannels()
    .then(channels => dispatch(receiveChannels(channels)));

export const fetchChannelInfo = (channelId) => ChannelAPIUtil.fetchChannelInfo(channelId)

export const createChannel = channel => dispatch => ChannelAPIUtil.createChannel(channel)
    .then(info => { 
        dispatch(receiveChannel(info.channel));
        let subscription = {
            subscriber_id: info.currentUser.id,
            subscribable_id: info.channel.id,
            subscribable_type: "Channel"
        }
        dispatch(subscribe(subscription));
    });