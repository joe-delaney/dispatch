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
        url: "/api/channels",
        data: {channel}
    })
)

export const deleteChannel = (channelId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/channels/${channelId}`
    })
)

export const updateChannel = (channel) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/channels/${channel.id}`,
        data: {channel}
    })
)