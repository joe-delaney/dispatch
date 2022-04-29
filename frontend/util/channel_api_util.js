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

export const createChannel = (channel) => (
    $.ajax({
        method: 'POST',
        url: "api/channels",
        data: {channel}
    })
)