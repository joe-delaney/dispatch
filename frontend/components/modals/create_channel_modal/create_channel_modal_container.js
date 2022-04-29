import { connect } from "react-redux";
import CreateChannelModal from "./create_channel_modal";
import { createChannel } from "../../../actions/channel_actions";
import { toggleCreateChannelModal } from "../../../actions/modal_actions";
import { subscribe } from "../../../actions/subscription_actions";

const mapStateToProps = state => ({
    displayModal: state.ui.modals.createChannelModalDisplayed,
    currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
    createChannel: (channel) => dispatch(createChannel(channel)),
    toggleModal: () => dispatch(toggleCreateChannelModal()),
    subscribe: (subscription) => dispatch(subscribe(subscription))
});

const CreateChannelModalContainer = connect(mapStateToProps, mapDispatchToProps)(CreateChannelModal);
export default CreateChannelModalContainer;