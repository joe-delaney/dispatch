import { connect } from "react-redux";
import ChannelBrowser from "./channel_browser";
// import { fetchChannels } from "../../actions/search_actions";
import { fetchChannels } from "../../actions/channel_actions";
import { selectSearchedChannels } from "../../actions/channel_selectors";

const mapStateToProps = state => ({
    // channels: Object.values(state.entities.searchResults.channels)
    channels: (query) => selectSearchedChannels(state.entities, query)
})

const mapDispatchToProps = dispatch => ({
    fetchChannels: () => dispatch(fetchChannels())
    // fetchChannels: (query) => dispatch(fetchChannels(query)) -- SearchResults
})

const ChannelBrowserContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelBrowser);
export default ChannelBrowserContainer;