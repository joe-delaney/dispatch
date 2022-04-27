import React from "react";

const ChannelSidebarListItem = ({channel}) => {
    return <li className="sidebar-list-item">{channel.name}</li>
}

export default ChannelSidebarListItem;