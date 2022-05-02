import { connect } from "react-redux";
// import { fetchGroupInfo, receiveGroupInfo } from "../../../actions/group_actions";
// import { subscribe } from "../../../actions/subscription_actions";
import GroupShow from "./group_show";
// import { toggleChannelDetailsModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
    group: state.entities.groups[ownProps.match.params.groupId],
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
    // fetchGroupInfo: (groupId) => dispatch(fetchGroupInfo(groupId)),
    // receiveChannelInfo: (info) => dispatch(receiveChannelInfo(info))
})

const GroupShowContainer = connect(mapStateToProps, mapDispatchToProps)(GroupShow)
export default GroupShowContainer;