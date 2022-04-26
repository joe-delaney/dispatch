import {connect} from "react-redux";
import UserShow from "./user_show";
import { fetchUser} from "../../../actions/user_actions";
import { toggleEditModal } from "../../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.currentUserId]
})

const mapDispatchToProps = dispatch  => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    toggleEditModal: () => dispatch(toggleEditModal())
})

const UserShowContainer = connect(mapStateToProps, mapDispatchToProps)(UserShow);
export default UserShowContainer;