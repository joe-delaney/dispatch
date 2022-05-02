import { combineReducers } from "redux";
import { usersReducer } from "./users_reducer";
import { searchResultsReducer } from "./search_results_reducer";
import channelsReducer from "./channels_reducer";
import { messagesReducer } from "./messages_reducer";
import groupsReducer from "./groups_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    searchResults: searchResultsReducer,
    channels: channelsReducer,
    messages: messagesReducer,
    groups: groupsReducer
});

export default entitiesReducer;