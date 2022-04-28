import { receiveUser } from "./user_actions";
import * as SubscriptionAPIUtil from "../util/subscription_api_util";

//Thunk action creator for subscribing a user to a channel or message group
//The current user will be returned and updated in state
export const subscribe = subscription => dispatch => SubscriptionAPIUtil.subscribe(subscription)
    .then((user) => dispatch(receiveUser(user)));

export const unsubscribe = subscription => dispatch => SubscriptionAPIUtil.unsubscribe(subscription)
    .then((user) => dispatch(receiveUser(user)));
