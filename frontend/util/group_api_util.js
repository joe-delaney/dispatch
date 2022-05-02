export const fetchGroups = () => (
    $.ajax({
        method: "GET",
        url: "/api/group_messages"
    })
);