import { connect } from "react-redux";
import ChannelDetailsModal from "./channel_details_modal";
import { toggleChannelDetailsModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    
    let channel = (ownProps.match && ownProps.match.params && ownProps.match.params.channelId) ? 
        (state.entities.channels[ownProps.match.params.channelId]) : undefined;

    return {
        channel: channel,
        displayModal: state.ui.modals.channelDetailsModalDisplayed
    }
}

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleChannelDetailsModal())
})

const ChannelDetailsModalContainer = connect(mapStateToProps, mapDispatchToProps)(ChannelDetailsModal);
export default ChannelDetailsModalContainer;