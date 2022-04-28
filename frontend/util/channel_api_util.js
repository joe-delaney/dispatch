export const fetchChannels = () => (
    $.ajax({
        method: "GET",
        url: "/api/channels"
    })
);

export const fetchChannelInfo = (channelId) => (
    $.ajax({
        method: "GET",
        url: `/api/channels/${channelId}`
    })
);