import { connect } from "react-redux"
// import { toggleChannelDetailsModal } from "../../../actions/modal_actions";
import GroupShowHeader from "./group_show_header";

const mapStateToProps = (state, ownProps) => ({
    group: state.entities.groups[ownProps.match.params.groupId]
})

const mapDispatchToProps = dispatch => ({
    // toggleModal: () => dispatch(toggleChannelDetailsModal())
})

const GroupShowHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(GroupShowHeader);
export default GroupShowHeaderContainer;