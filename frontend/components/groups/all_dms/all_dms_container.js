import { connect } from "react-redux";
import AllDMs from "./all_dms";
import {fetchGroups} from "../../../actions/group_actions"

const mapStateToProps = (state) => ({
    groups: Object.values(state.entities.groups),
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = (dispatch) => ({
    fetchGroups: () => dispatch(fetchGroups())
})

const AllDMsContainer = connect(mapStateToProps, mapDispatchToProps)(AllDMs);
export default AllDMsContainer;