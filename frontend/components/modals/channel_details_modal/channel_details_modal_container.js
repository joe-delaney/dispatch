import { connect } from "react-redux";
import ChannelDetailsModal from "./channel_details_modal";
import { toggleChannelDetailsModal } from "../../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import { selectChannelMembers } from "../../../actions/channel_selectors";
import { unsubscribe, subscribe } from "../../../actions/subscription_actions";

const mapStateToProps = (state, ownProps) => {
    let pathnameComponents = ownProps.location.pathname.split("/");
    let channelId = pathnameComponents[pathnameComponents.indexOf('channels')+1];
    let channel = !isNaN(channelId) ? state.entities.channels[channelId] : undefined;
    let creator = channel ? state.entities.users[channel.creatorId] : undefined;
    let channelMembers = channel ? selectChannelMembers(state.entities, channel.channelMemberIds) : [];

    return {
        channel: channel,
        displayModal: state.ui.modals.channelDetailsModalDisplayed,
        channel_creator: creator,
        members: channelMembers,
        currentUser: state.entities.users[state.session.currentUserId]
    }
}

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleChannelDetailsModal()),
    unsubscribe: (subscription) => dispatch(unsubscribe(subscription)),
    subscribe: (subscription) => dispatch(subscribe(subscription))
})

const ChannelDetailsModalContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelDetailsModal);
export default withRouter(ChannelDetailsModalContainer);