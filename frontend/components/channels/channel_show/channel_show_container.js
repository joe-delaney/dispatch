import { connect } from "react-redux";
import { fetchChannelInfo } from "../../../actions/channel_actions";
import ChannelShow from "./channel_show";

const mapStateToProps = (state, ownProps) => ({
    channel: state.entities.channels[ownProps.match.params.channelId],
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
    fecthChannelInfo: (channelId) => dispatch(fetchChannelInfo(channelId))
})

const ChannelShowContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelShow);
export default ChannelShowContainer;
