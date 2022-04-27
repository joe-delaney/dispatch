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