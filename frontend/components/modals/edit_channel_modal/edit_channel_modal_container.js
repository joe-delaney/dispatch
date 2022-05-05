import { connect } from "react-redux";
import { toggleEditChannelModal } from "../../../actions/modal_actions";
import EditChannelModal from "./edit_channel_modal";

const mapStateToProps = state => ({
    displayModal: state.ui.modals.editChannelModalDisplayed,
    attr: state.ui.modals.editChannelModalAttribute
});

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleEditChannelModal())
});

const EditChannelModalContainer = connect(mapStateToProps, mapDispatchToProps)(EditChannelModal);
export default EditChannelModalContainer;