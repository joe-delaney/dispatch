import { connect } from "react-redux";
import ChannelSidebarList from "./channel_sidebar_list";
import { selectCurrentUserChannels } from "../../../actions/channel_selectors";

const mapStateToProps = (state, ownProps) => ({
     channels: selectCurrentUserChannels(state.entities, state.entities.users[state.session.currentUserId])
})

const mapDisptachToProps = dispatch => ({

})

const ChannelSidebarListContainer = connect(mapStateToProps, mapDisptachToProps)(ChannelSidebarList);
export default ChannelSidebarListContainer;