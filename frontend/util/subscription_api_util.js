export const subscribe = (subscription) => (
    $.ajax({
        method: "POST",
        url: "/api/subscriptions",
        data: {subscription}
    })
)

export const unsubscribe = (subscription) => (
    $.ajax({
        method: "DELETE",
        url: "/api/subscriptions/1",
        data: { subscription }
    })
)