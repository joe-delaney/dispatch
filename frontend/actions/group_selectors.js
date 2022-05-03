export const selectGroupMessages = ({ messages }, messageIds) => {
    let groupMessages = [];
    if (messageIds) {
        messageIds.forEach((id) => {
            if (messages[id]) groupMessages.push(messages[id]);
        })
    }
    return groupMessages.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1);
}