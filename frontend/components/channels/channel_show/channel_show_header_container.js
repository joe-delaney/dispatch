import { connect } from "react-redux"
import { toggleChannelDetailsModal } from "../../../actions/modal_actions";
import ChannelShowHeader from "./channel_show_header";

const mapStateToProps = (state, ownProps) => ({
    channel: state.entities.channels[ownProps.match.params.channelId]
})

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleChannelDetailsModal())
})

const ChannelShowHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelShowHeader);
export default ChannelShowHeaderContainer;