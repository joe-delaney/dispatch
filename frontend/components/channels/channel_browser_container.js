import { connect } from "react-redux";
import ChannelBrowser from "./channel_browser";
import { fetchChannels } from "../../actions/search_actions";

const mapStateToProps = state => ({
    channels: Object.values(state.entities.searchResults.channels)
})

const mapDispatchToProps = dispatch => ({
    fetchChannels: (query) => dispatch(fetchChannels(query))
})

const ChannelBrowserContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelBrowser);
export default ChannelBrowserContainer;