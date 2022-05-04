import { connect } from "react-redux";
import AllDMs from "./all_dms";
import {fetchGroups} from "../../../actions/group_actions"
import { searchUsers, clearUserSearchResults, ALL_DMS_SEARCH_BAR } from "../../../actions/search_actions";

const mapStateToProps = (state) => ({
    groups: Object.values(state.entities.groups),
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = (dispatch) => ({
    fetchGroups: () => dispatch(fetchGroups()),
    searchUsers: (query) => dispatch(searchUsers(query, ALL_DMS_SEARCH_BAR)),
    clearUserSearchResults: () => dispatch(clearUserSearchResults(ALL_DMS_SEARCH_BAR))
})

const AllDMsContainer = connect(mapStateToProps, mapDispatchToProps)(AllDMs);
export default AllDMsContainer;