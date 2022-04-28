import React from "react";
import { Link } from "react-router-dom";

const ChannelSidebarListItem = ({channel}) => {
    return (
        <Link to={`/user-dashboard/channels/${channel.id}`} className="sidebar-list-item-container">
            <li className="sidebar-list-item">
                <span className="sidebar-hashtag">{`#`}</span>
                <span className="sidebar-item-name">{channel.name}</span>
            </li>
        </Link>
    )
}

export default ChannelSidebarListItem;