import { connect } from "react-redux";
import { fetchChannelInfo, receiveChannelInfo } from "../../../actions/channel_actions";
import { subscribe } from "../../../actions/subscription_actions";
import ChannelShow from "./channel_show";
import { toggleChannelDetailsModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
    channel: state.entities.channels[ownProps.match.params.channelId],
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleChannelDetailsModal()),
    fecthChannelInfo: (channelId) => fetchChannelInfo(channelId),
    subscribe: (subscription) => dispatch(subscribe(subscription)),
    receiveChannelInfo: (info) => dispatch(receiveChannelInfo(info))
})

const ChannelShowContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelShow);
export default ChannelShowContainer;
