import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GroupDetailsModal from "./group_details_modal";
import { toggleGroupDetailsModal } from "../../../actions/modal_actions";
import { selectGroupMembers } from "../../../actions/group_selectors";

const mapStateToProps = (state, ownProps) => {
    let pathnameComponents = ownProps.location.pathname.split("/");
    let groupId = pathnameComponents[pathnameComponents.indexOf('message-groups') + 1];
    let group = !isNaN(groupId) ? state.entities.groups[groupId] : undefined;
    let groupMembers = group ? selectGroupMembers(state.entities, group.groupMemberIds) : [];
    
    return {
        displayModal: state.ui.modals.groupDetailsModalDisplayed,
        group: group,
        members: groupMembers,
        currentUser: state.entities.users[state.session.currentUserId]
    }
}

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleGroupDetailsModal())
})  

const GroupDetailsModalContainer = connect(mapStateToProps, mapDispatchToProps)(GroupDetailsModal);
export default withRouter(GroupDetailsModalContainer);