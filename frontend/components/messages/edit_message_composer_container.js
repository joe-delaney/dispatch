import { connect } from "react-redux";
import EditMessageComposer from "./edit_message_composer";
import { updateMessage } from "../../actions/message_actions";

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    updateMessage: (message) => dispatch(updateMessage(message))
})

const EditMessageComposerContainer = connect(mapStateToProps, mapDispatchToProps)(EditMessageComposer);
export default EditMessageComposerContainer;