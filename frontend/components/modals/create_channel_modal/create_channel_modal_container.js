import { connect } from "react-redux";
import CreateChannelModal from "./create_channel_modal";
import { createChannel } from "../../../actions/channel_actions";
import { toggleCreateChannelModal } from "../../../actions/modal_actions";

const mapStateToProps = state => ({
    displayModal: state.ui.modals.createChannelModalDisplayed
});

const mapDispatchToProps = dispatch => ({
    createChannel: (channel) => dispatch(createChannel(channel)),
    toggleModal: () => dispatch(toggleCreateChannelModal())
});

const CreateChannelModalContainer = connect(mapStateToProps, mapDispatchToProps)(CreateChannelModal);
export default CreateChannelModalContainer;