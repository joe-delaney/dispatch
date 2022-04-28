import { connect } from "react-redux";
import ChannelBrowser from "./channel_browser";
import { fetchChannels } from "../../../actions/channel_actions";
import { selectSearchedChannels } from "../../../actions/channel_selectors";

const mapStateToProps = state => ({
    channels: (query) => selectSearchedChannels(state.entities, query),
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch => ({
    fetchChannels: () => dispatch(fetchChannels())
})

const ChannelBrowserContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelBrowser);
export default ChannelBrowserContainer;