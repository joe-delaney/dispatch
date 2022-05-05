import React from "react";
import { Link } from "react-router-dom";

const ChannelSidebarListItem = ({channel, ownProps, show}) => {
    let selected = ownProps.location.pathname.includes(`/channels/${channel.id}`)
    let selectedItem = selected ? "selected-sidebar-item" : "";
    let showItem = (show || selected) ? "" : "hidden";
    return (
        <Link to={`/user-dashboard/channels/${channel.id}`} className={`sidebar-list-item-container  ${showItem}`}>
            <li className={`sidebar-list-item ${selectedItem}`}>
                <span className={`sidebar-hashtag ${selectedItem}`}>{`#`}</span>
                <span className={`sidebar-item-name ${selectedItem}`}>{channel.name}</span>
            </li>
        </Link>
    )
}

export default ChannelSidebarListItem;