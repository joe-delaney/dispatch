import { connect } from "react-redux";
import UserDashboard from "./user_dashboard";
import { searchUsers, clearSearchResults } from "../../actions/search_actions";
import {logout} from "../../actions/session_actions"

const mapStateToProps = (state, ownProps) => ({
    userSearchResults: Object.values(state.entities.searchResults.users),
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
    searchUsers: query => dispatch(searchUsers(query)),
    clearSearchResults: () => dispatch(clearSearchResults()),
    logout: () => dispatch(logout())
})

const UserDashboardContainer = connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
export default UserDashboardContainer;