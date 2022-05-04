import { connect } from "react-redux";
import UserDashboard from "./user_dashboard";
import { searchUsers, clearUserSearchResults } from "../../actions/search_actions";
import {logout} from "../../actions/session_actions"
import { toggleEditModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/user_actions";
import { selectSearchedChannels } from "../../actions/channel_selectors";
import { fetchChannels } from "../../actions/channel_actions";
import { fetchGroups } from "../../actions/group_actions";
import { NAV_SEARCH_BAR } from "../../actions/search_actions";

const mapStateToProps = (state, ownProps) => ({
    userSearchResults: Object.values(state.entities.searchResults.navSearchBar),
    currentUser: state.entities.users[state.session.currentUserId],
    editModalDisplayed: state.ui.modals.editModalDisplayed,
    selectedChannels: (query) => selectSearchedChannels(state.entities, query),
    ownProps: ownProps,
    groups: Object.values(state.entities.groups)
})

const mapDispatchToProps = dispatch => ({
    searchUsers: query => dispatch(searchUsers(query, NAV_SEARCH_BAR)),
    clearUserSearchResults: () => dispatch(clearUserSearchResults(NAV_SEARCH_BAR)),
    logout: () => dispatch(logout()),
    toggleEditModal: () => dispatch(toggleEditModal()),
    updateUser: (user) => dispatch(updateUser(user)),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchGroups: () => dispatch(fetchGroups())
})

const UserDashboardContainer = connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
export default UserDashboardContainer;