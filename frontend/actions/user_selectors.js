//Select users from state based on a query string
export const selectSearchedUsers = ({ users }, query) => {
    if (query === "") {
        return Object.values(users);
    } else {
        let searchResults = [];
        Object.values(users).forEach((user) => {
            if (user.displayName.toLowerCase().startsWith(query.toLowerCase())) {
                searchResults.push(user);
            }
        })
        return searchResults;
    }
}

export const selectUserById = ({users}, id) => {
    return users[id]
};