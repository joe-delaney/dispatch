import { connect } from "react-redux";
import { clearErrors, login, receiveErrors } from "../../actions/session_actions"
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: "login"
})

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    clearErrors: () => dispatch(clearErrors())
})

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default LoginFormContainer;