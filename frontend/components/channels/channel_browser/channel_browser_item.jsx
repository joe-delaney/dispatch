import React from "react";

const ChannelBrowserItem = ({channel}) => {
    return (
        <li className="channel-browser-item">
            <div className="channel-browser-label-container">
                <span className="channel-browser-item-title">{`# ${channel.name}`}</span>
                <span className="channel-browser-item-subtitle">{`${channel.channelMemberIds.length} members`}</span>
            </div>
        </li>
    )
}

export default ChannelBrowserItem;