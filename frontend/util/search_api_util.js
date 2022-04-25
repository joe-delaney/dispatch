export const fetchUsers = (query) => (
    $.ajax({
        method: "GET",
        url: "/api/users",
        data: { query }
    })
)