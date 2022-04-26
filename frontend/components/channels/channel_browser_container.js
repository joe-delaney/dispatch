import { connect } from "react-redux";
import ChannelBrowser from "./channel_browser";
import { fetchChannels } from "../../actions/channel_actions";

const mapStateToProps = state => ({
    channels: Object.values(state.entities.channels)
})

const mapDispatchToProps = dispatch => ({
    fetchChannels: () => dispatch(fetchChannels())
})

const ChannelBrowserContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelBrowser);
export default ChannelBrowserContainer;