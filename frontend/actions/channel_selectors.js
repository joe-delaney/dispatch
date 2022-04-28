//Select channels from state based on a query string
export const selectSearchedChannels = ({channels}, query) => {
    if(query === "") {
        return Object.values(channels);
    } else {
        let searchResults = [];
        Object.values(channels).forEach((channel) => {
            if (channel.name.toLowerCase().includes(query.toLowerCase())) {
                searchResults.push(channel);
            }
        })
        return searchResults;
    }
}

export const selectCurrentUserChannels = ({channels}, user) => {
    let subscribedChannels = [];

    if(user && user.subscribedChannelIds) {
        user.subscribedChannelIds.forEach((channel_id) => {
            if(channels[channel_id]) subscribedChannels.push(channels[channel_id]);
        })
    }
    return subscribedChannels;
}

export const selectChannelMembers = ({users}, channelMemberIds) => {
    let channelMembers = [];
    channelMemberIds.forEach((id) => {
        channelMembers.push(users[id]);
    })
    return channelMembers;
}