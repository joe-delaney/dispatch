export const fetchChannels = () => (
    $.ajax({
        method: "GET",
        url: "/api/channels"
    })
);