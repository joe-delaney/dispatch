import * as MessageApiUtil from "../util/message_api_util";
import { receiveChannelInfo } from "../actions/channel_actions";

export const createMessage = message => dispatch => MessageApiUtil.createMessage(message)
    .then(info => dispatch(receiveChannelInfo(info)));

export const updateMessage = message => dispatch => MessageApiUtil.updateMessage(message)
    .then(info => dispatch(receiveChannelInfo(info)));