import React from "react";

const ChannelSidebarListItem = ({channel}) => {
    return (
        <div className="sidebar-list-item-container">
            <li className="sidebar-list-item">
                <span className="sidebar-hashtag">{`#`}</span>
                <span className="sidebar-item-name">{channel.name}</span>
            </li>
        </div>
    )
}

export default ChannelSidebarListItem;