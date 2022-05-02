import { receiveUser } from "./user_actions";
import * as SubscriptionAPIUtil from "../util/subscription_api_util";
import { receiveSubscribedUser, receiveUnsubscribedUser } from "./channel_actions";

//Thunk action creator for subscribing a user to a channel or message group
//The current user will be returned and updated in state
export const subscribe = subscription => dispatch => SubscriptionAPIUtil.subscribe(subscription)
    .then((user) => {
        dispatch(receiveUser(user))
        //Add user to channel (will get overwriiten by model when page refreshes)
        if(subscription.subscribable_type === "Channel") {
            dispatch(receiveSubscribedUser(user.id, subscription.subscribable_id));
        }   
    });

export const unsubscribe = subscription => dispatch => SubscriptionAPIUtil.unsubscribe(subscription)
    .then((user) => {
        dispatch(receiveUser(user))
        //Remove user from channel (will get overwriiten by model when page refreshes)
        if (subscription.subscribable_type === "Channel") {
            dispatch(receiveUnsubscribedUser(user.id, subscription.subscribable_id));
        }  
    });
