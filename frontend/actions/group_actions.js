import * as GroupAPIUtil from "../util/group_api_util";

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_INFO = "RECEIVE_INFO";

const receiveGroups = (groups) => ({
    type: RECEIVE_GROUPS,
    groups
})

export const receiveGroupInfo = (info) => ({
    type: RECEIVE_INFO,
    info
})

export const fetchGroups = () => dispatch => GroupAPIUtil.fetchGroups()
    .then(groups => dispatch(receiveGroups(groups)));

export const fetchGroupInfo = (groupId) => GroupAPIUtil.fetchGroupInfo(groupId)