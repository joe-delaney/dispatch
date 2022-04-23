import { connect } from "react-redux";
import SplashPage from "./splash_page";
import { logout, login } from "../../actions/session_actions";

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    demoClicked: () => dispatch(login({email:"joe@test.com", password: "123456"}))
});

const SplashPageContainer = connect(mapStateToProps, mapDispatchToProps)(SplashPage);
export default SplashPageContainer;