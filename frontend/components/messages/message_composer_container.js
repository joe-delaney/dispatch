import { connect } from "react-redux";
import { createMessage } from "../../util/message_api_util";
import MessageComposer from "./message_composer";

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    createMessage: (message) => createMessage(message)
})

const MessageComposerContainer = connect(mapStateToProps, mapDispatchToProps)(MessageComposer);
export default MessageComposerContainer;