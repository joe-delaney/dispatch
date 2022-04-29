import { connect } from "react-redux";
import MessageFeed from "./message_feed";
import { selectChannelMessages } from "../../actions/channel_selectors";

const mapStateToProps = (state, ownProps) => {
    let messages = [];
    if(ownProps.parent && ownProps.messagable_type === "Channel") {
        messages = selectChannelMessages(state.entities, ownProps.parent.messageIds);
    }

    return {
        parent: ownProps.parent,
        messages: messages
    }
};

const mapDispatchToProps = dispatch => ({

});

const MessageFeedContainer = connect(mapStateToProps, mapDispatchToProps)(MessageFeed);
export default MessageFeedContainer;