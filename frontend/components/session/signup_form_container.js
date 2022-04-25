import { connect } from "react-redux";
import { signup, receiveErrors, clearErrors } from "../../actions/session_actions"
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: "signup"
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors()),
    demoClicked: () => dispatch(login({ email: "joe@test.com", password: "123456" }))
})

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default SignupFormContainer;