import * as MessageApiUtil from "../util/message_api_util";
import { receiveChannelInfo } from "../actions/channel_actions";

export const createMessage = message => dispatch => MessageApiUtil.createMessage(message)
    .then(info => receiveChannelInfo(info));