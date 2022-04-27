import React from "react";

const UserDashBoardNavChannelSearchResult = ({channel}) => {
    const displayText = channel.topic ?
        `${channel.name} • ${channel.topic}` :
        `${channel.name}`

    return (
        <li className="user-dashboard-nav-search-result">
            <span className="display-label-nav-bar-search-result">#</span>
            <span className="display-text-nav-bar-search-result">{displayText}</span>
        </li>
    )
}

export default UserDashBoardNavChannelSearchResult;