import { connect } from "react-redux";
import AllDMsItem from "./all_dms_item";
import { fetchGroupInfo, receiveGroupInfo } from "../../../actions/group_actions";

const mapStateToProps = (state, ownProps) => {
    let messageId = ownProps.group.messageIds[ownProps.group.messageIds.length-1];
    let lastMessage = state.entities.messages[messageId];
    let lastMessageAuthor = lastMessage ? state.entities.users[lastMessage.authorId] : undefined;
    return {
        message: lastMessage,
        currentUser: state.entities.users[state.session.currentUserId],
        author: lastMessageAuthor
    }
}
const mapDispatchToProps = (dispatch) => ({
    fetchGroupInfo: (groupId) => fetchGroupInfo(groupId),
    receiveGroupInfo: (info) => dispatch(receiveGroupInfo(info))
})

const AllDMsItemContainer = connect(mapStateToProps, mapDispatchToProps)(AllDMsItem);
export default AllDMsItemContainer;