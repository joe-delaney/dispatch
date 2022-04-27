import { connect } from "react-redux";
import UserDashboard from "./user_dashboard";
import { searchUsers, clearUserSearchResults } from "../../actions/search_actions";
import {logout} from "../../actions/session_actions"
import { toggleEditModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => ({
    userSearchResults: Object.values(state.entities.searchResults.users),
    currentUser: state.entities.users[state.session.currentUserId],
    editModalDisplayed: state.ui.modals.editModalDisplayed
})

const mapDispatchToProps = dispatch => ({
    searchUsers: query => dispatch(searchUsers(query)),
    clearUserSearchResults: () => dispatch(clearUserSearchResults()),
    logout: () => dispatch(logout()),
    toggleEditModal: () => dispatch(toggleEditModal()),
    updateUser: (user) => dispatch(updateUser(user))
})

const UserDashboardContainer = connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
export default UserDashboardContainer;