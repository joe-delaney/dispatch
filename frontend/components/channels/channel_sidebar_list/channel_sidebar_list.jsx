import React from "react";
import ChannelSidebarListItem from "./channel_sidebar_list_item";

const ChannelSidebarList = ({channels}) => {
    return (
        <ul>
            {channels.map((channel, idx) => <ChannelSidebarListItem key={idx} channel={channel}/>)}
        </ul>
    )
}

export default ChannelSidebarList;