import { connect } from "react-redux";
import { signup, receiveErrors } from "../../actions/session_actions"
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: "signup"
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors))
})

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default SignupFormContainer;