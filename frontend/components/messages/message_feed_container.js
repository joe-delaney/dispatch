import { connect } from "react-redux";
import MessageFeed from "./message_feed";
import { selectChannelMessages } from "../../actions/channel_selectors";
import { selectGroupMessages } from "../../actions/group_selectors";
import { selectUserById } from "../../actions/user_selectors";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    let messages = [];
    if(ownProps.parent && ownProps.messagable_type === "Channel") {
        messages = selectChannelMessages(state.entities, ownProps.parent.messageIds);
    } else if(ownProps.parent && ownProps.messagable_type === "GroupMessage") {
        messages = selectGroupMessages(state.entities, ownProps.parent.messageIds);
    }

    return {
        parent: ownProps.parent,
        messages: messages,
        getAuthor: (authorId) => selectUserById(state.entities, authorId),
        currentUser: state.entities.users[state.session.currentUserId],
        ownProps: ownProps 
    }
};

const mapDispatchToProps = dispatch => ({

});

const MessageFeedContainer = connect(mapStateToProps, mapDispatchToProps)(MessageFeed);
export default withRouter(MessageFeedContainer);