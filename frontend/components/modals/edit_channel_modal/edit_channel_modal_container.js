import { connect } from "react-redux";
import { toggleEditChannelModal } from "../../../actions/modal_actions";
import EditChannelModal from "./edit_channel_modal";
import { withRouter } from "react-router-dom";
import { updateChannel } from "../../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => {
    let pathnameComponents = ownProps.location.pathname.split("/");
    let channelId = pathnameComponents[pathnameComponents.indexOf('channels') + 1];
    let channel = !isNaN(channelId) ? state.entities.channels[channelId] : undefined;

    return {
        displayModal: state.ui.modals.editChannelModalDisplayed,
        attr: state.ui.modals.editChannelModalAttribute,
        channel: channel
    }
};

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleEditChannelModal()),
    updateChannel: (channel) => dispatch(updateChannel(channel))
});

const EditChannelModalContainer = connect(mapStateToProps, mapDispatchToProps)(EditChannelModal);
export default withRouter(EditChannelModalContainer);