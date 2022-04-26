import {connect} from "react-redux";
import UserShow from "./user_show";
import { fetchUser } from "../../../actions/search_actions";

const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
})

const mapDispatchToProps = dispatch  => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))
})

const UserShowContainer = connect(mapStateToProps, mapDispatchToProps)(UserShow);
export default UserShowContainer;