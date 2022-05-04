import { connect } from "react-redux";
import NewMessageView from "./new_message_view";
import { searchUsers, clearUserSearchResults, NEW_MESSAGE_SEARCH_BAR } from "../../../actions/search_actions";
import { selectSearchedChannels } from "../../../actions/channel_selectors";

const mapStateToProps = (state) => ({
    userSearchResults: Object.values(state.entities.searchResults.newMessageSearchBar),
    selectedChannels: (query) => selectSearchedChannels(state.entities, query)
})

const mapDispatchToProps = dispatch => ({
    searchUsers: (query) => dispatch(searchUsers(query, NEW_MESSAGE_SEARCH_BAR)),
    clearUserSearchResults: () => dispatch(clearUserSearchResults(NEW_MESSAGE_SEARCH_BAR))
})

const NewMessageViewContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageView);
export default NewMessageViewContainer;