import { connect } from "react-redux";
import { createMessage } from "../../actions/message_actions";
import MessageComposer from "./message_composer";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    createMessage: (message) => dispatch(createMessage(message))
})

const MessageComposerContainer = connect(mapStateToProps, mapDispatchToProps)(MessageComposer);
export default MessageComposerContainer;