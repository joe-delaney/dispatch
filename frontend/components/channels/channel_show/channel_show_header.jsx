import React from "react";

const ChannelShowHeader = ({channel}) => {
    const channelName = channel ? channel.name : "";
    return <h1>{channelName}</h1>
}

export default ChannelShowHeader;