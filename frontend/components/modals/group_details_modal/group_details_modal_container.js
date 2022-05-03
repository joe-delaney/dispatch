import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GroupDetailsModal from "./group_details_modal";
import { toggleGroupDetailsModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
    displayModal: state.ui.modals.groupDetailsModalDisplayed 
})

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleGroupDetailsModal())
})  

const GroupDetailsModalContainer = connect(mapStateToProps, mapDispatchToProps)(GroupDetailsModal);
export default withRouter(GroupDetailsModalContainer);