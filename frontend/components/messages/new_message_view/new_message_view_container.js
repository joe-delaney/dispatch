import { connect } from "react-redux";
import NewMessageView from "./new_message_view";
import { searchUsers, clearUserSearchResults, NEW_MESSAGE_SEARCH_BAR } from "../../../actions/search_actions";
import { selectSearchedChannels } from "../../../actions/channel_selectors";
import { createGroup, updateGroup } from "../../../util/group_api_util";
import { receiveGroupInfo } from "../../../actions/group_actions";

const mapStateToProps = (state) => ({
    userSearchResults: Object.values(state.entities.searchResults.newMessageSearchBar),
    selectedChannels: (query) => selectSearchedChannels(state.entities, query),
    groups: Object.values(state.entities.groups),
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
    searchUsers: (query) => dispatch(searchUsers(query, NEW_MESSAGE_SEARCH_BAR)),
    clearUserSearchResults: () => dispatch(clearUserSearchResults(NEW_MESSAGE_SEARCH_BAR)),
    createGroup: (userIds) => createGroup(userIds),
    receiveGroupInfo: (info) => dispatch(receiveGroupInfo(info)),
    updateGroup: (group) => updateGroup(group)
})

const NewMessageViewContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageView);
export default NewMessageViewContainer;