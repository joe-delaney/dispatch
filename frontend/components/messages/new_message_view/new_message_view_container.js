import { connect } from "react-redux";
import NewMessageView from "./new_message_view";
import { searchUsers, clearUserSearchResults, NEW_MESSAGE_SEARCH_BAR } from "../../../actions/search_actions";

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => ({
    searchUsers: (query) => dispatch(searchUsers(query, NEW_MESSAGE_SEARCH_BAR)),
    clearUserSearchResults: () => dispatch(clearUserSearchResults(NEW_MESSAGE_SEARCH_BAR))
})

const NewMessageViewContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessageView);
export default NewMessageViewContainer;