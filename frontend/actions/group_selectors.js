export const selectGroupMessages = ({ messages }, messageIds) => {
    let groupMessages = [];
    if (messageIds) {
        messageIds.forEach((id) => {
            if (messages[id]) groupMessages.push(messages[id]);
        })
    }
    return groupMessages.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1);
}

export const selectGroupMembers = ({ users }, groupMemberIds) => {
    let groupMembers = [];
    groupMemberIds.forEach((id) => {
        groupMembers.push(users[id]);
    })
    return groupMembers;
}