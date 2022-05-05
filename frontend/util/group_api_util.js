export const fetchGroups = () => (
    $.ajax({
        method: "GET",
        url: "/api/group_messages"
    })
);

export const fetchGroupInfo = (groupId) => (
    $.ajax({
        method: "GET",
        url: `/api/group_messages/${groupId}`
    })
)

export const createGroup = (userIds) => (
    $.ajax({
        method: "POST",
        url: "/api/group_messages",
        data: {userIds}
    })
)

export const updateGroup = (group) => (
    $.ajax({
        method: "PATCH",
        url: `/api/group_messages/${group.id}`,
        data: { group }
    })
)