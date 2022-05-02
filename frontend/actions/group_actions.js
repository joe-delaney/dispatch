import * as GroupAPIUtil from "../util/group_api_util";

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";

const receiveGroups = (groups) => ({
    type: RECEIVE_GROUPS,
    groups
})

export const fetchGroups = () => dispatch => GroupAPIUtil.fetchGroups()
    .then(groups => dispatch(receiveGroups(groups)));