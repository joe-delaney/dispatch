import {connect} from "react-redux";
import UserShow from "./user_show";
import { fetchUser} from "../../../actions/user_actions";
import { toggleEditModal, toggleProfileView } from "../../../actions/modal_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
    let pathnameComponents = ownProps.location.pathname.split("/");
    let userId;
    if(pathnameComponents.indexOf('users') !== -1) {
        userId = pathnameComponents[pathnameComponents.indexOf('users') + 1];
        userId = !isNaN(userId) ? userId : undefined;
    } else {
        userId = 0;
    }

    return {
        user: state.entities.users[userId],
        currentUser: state.entities.users[state.session.currentUserId],
        userId: userId,
        profileViewDisplayed: state.ui.modals.profileViewDisplayed
    }
}

const mapDispatchToProps = dispatch  => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    toggleEditModal: () => dispatch(toggleEditModal()),
    toggleProfileView: () => dispatch(toggleProfileView())
})

const UserShowContainer = connect(mapStateToProps, mapDispatchToProps)(UserShow);
export default withRouter(UserShowContainer);