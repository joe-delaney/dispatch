import React from "react";

const ChannelBrowserItem = ({channel}) => (
    <li className="channel-browser-item">
        <span className="channel-browser-item-title">{`# ${channel.name}`}</span>
    </li>
)

export default ChannelBrowserItem;