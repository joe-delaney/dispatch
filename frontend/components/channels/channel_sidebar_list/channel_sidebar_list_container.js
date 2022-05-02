import { connect } from "react-redux";
import ChannelSidebarList from "./channel_sidebar_list";
import { selectCurrentUserChannels } from "../../../actions/channel_selectors";
import { toggleCreateChannelModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
     channels: selectCurrentUserChannels(state.entities, state.entities.users[state.session.currentUserId])
})

const mapDisptachToProps = dispatch => ({
     toggleModal: () => dispatch(toggleCreateChannelModal())
})

const ChannelSidebarListContainer = connect(mapStateToProps, mapDisptachToProps)(ChannelSidebarList);
export default ChannelSidebarListContainer;