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

    if(user && user.subscribedChannels) {
        user.subscribedChannels.forEach((channel_id) => {
            console.log(channel_id)
            subscribedChannels.push(channels[channel_id])
        })
    }

    return subscribedChannels;
}