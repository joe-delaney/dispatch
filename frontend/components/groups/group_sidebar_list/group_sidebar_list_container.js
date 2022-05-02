import { connect } from "react-redux";
import GroupSidebarList from "./group_sidebar_list";

const mapStateToProps = (state) => ({
    groups: Object.values(state.entities.groups)
})

const mapDispatchToProps = dispatch => ({

})

const GroupSidebarListContainer = connect(mapStateToProps, mapDispatchToProps)(GroupSidebarList);
export default GroupSidebarListContainer;