import { connect } from "react-redux";
import { fetchGroupInfo, receiveGroupInfo } from "../../../actions/group_actions";
import GroupShow from "./group_show";

const mapStateToProps = (state, ownProps) => ({
    group: state.entities.groups[ownProps.match.params.groupId],
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
    fetchGroupInfo: (groupId) => fetchGroupInfo(groupId),
    receiveGroupInfo: (info) => dispatch(receiveGroupInfo(info))
})

const GroupShowContainer = connect(mapStateToProps, mapDispatchToProps)(GroupShow)
export default GroupShowContainer;