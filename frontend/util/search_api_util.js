export const fetchUsers = (query) => (
    $.ajax({
        method: "GET",
        url: "/api/users",
        data: { query }
    })
)

export const fetchUser = (userId) => (
    $.ajax({
        method: "GET",
        url: `/api/users/${userId}`
    })
)