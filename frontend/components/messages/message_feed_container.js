import { connect } from "react-redux";
import MessageFeed from "./message_feed";
import { selectChannelMessages } from "../../actions/channel_selectors";
import { selectUserById } from "../../actions/user_selectors";

const mapStateToProps = (state, ownProps) => {
    let messages = [];
    if(ownProps.parent && ownProps.messagable_type === "Channel") {
        messages = selectChannelMessages(state.entities, ownProps.parent.messageIds);
    }

    return {
        parent: ownProps.parent,
        messages: messages,
        getAuthor: (authorId) => selectUserById(state.entities, authorId),
        currentUser: state.entities.users[state.session.currentUserId] 
    }
};

const mapDispatchToProps = dispatch => ({

});

const MessageFeedContainer = connect(mapStateToProps, mapDispatchToProps)(MessageFeed);
export default MessageFeedContainer;