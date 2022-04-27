export const fetchUsers = (query) => (
    $.ajax({
        method: "GET",
        url: "/api/users",
        data: { query }
    })
)

export const fetchChannels = (query) => (
    $.ajax({
        method: "GET",
        url: "/api/channels",
        data: { query }
    })
);