import { connect } from "react-redux";
import { receiveGroupInfo } from "../../../actions/group_actions";
import { updateGroup } from "../../../util/group_api_util";
import GroupSidebarList from "./group_sidebar_list";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
    groups: Object.values(state.entities.groups),
    ownProps: ownProps
})

const mapDispatchToProps = dispatch => ({
    updateGroup: group => updateGroup(group),
    receiveGroupInfo: info => dispatch(receiveGroupInfo(info))
})

const GroupSidebarListContainer = connect(mapStateToProps, mapDispatchToProps)(GroupSidebarList);
export default withRouter(GroupSidebarListContainer);

