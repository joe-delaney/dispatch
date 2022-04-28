import { connect } from "react-redux";
import ChannelDetailsModal from "./channel_details_modal";
import { toggleChannelDetailsModal } from "../../../actions/modal_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    let pathnameComponents = ownProps.location.pathname.split("/");
    let channelId = pathnameComponents[pathnameComponents.indexOf('channels')+1];
    let channel = !isNaN(channelId) ? state.entities.channels[channelId] : undefined;
    let creator = channel ? state.entities.users[channel.creatorId] : undefined;
    return {
        channel: channel,
        displayModal: state.ui.modals.channelDetailsModalDisplayed,
        channel_creator: creator
    }
}

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleChannelDetailsModal())
})

const ChannelDetailsModalContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelDetailsModal);
export default withRouter(ChannelDetailsModalContainer);