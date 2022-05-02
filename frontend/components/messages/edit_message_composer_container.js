import { connect } from "react-redux";
import EditMessageComposer from "./edit_message_composer";
import { updateMessage } from "../../util/message_api_util";

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    updateMessage: (message) => updateMessage(message)
})

const EditMessageComposerContainer = connect(mapStateToProps, mapDispatchToProps)(EditMessageComposer);
export default EditMessageComposerContainer;