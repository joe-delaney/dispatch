import React from "react";

const ChannelShowHeader = ({channel, toggleModal}) => {
    const channelName = channel ? channel.name : "";
    const channelTopic = (channel && channel.topic) ? channel.topic : "";
    const channelMembers = channel ? channel.channelMemberIds.length : 0;
    const channelMembersLabel = channelMembers === 1 ? " member" : " members";

    return (
        <div className="channel-show-header">
            <div className="channel-show-header-left">
                <div onClick={toggleModal} className="channel-show-header-text">
                    <h1 >{`# ${channelName}`}</h1>
                    <span className="channel-show-down-carret">ˇ</span>
                </div>
                <span className="channel-show-topic">{channelTopic}</span>
            </div>
            <div onClick={toggleModal} className="channel-show-members-icon">
                <span className="channel-show-members-icon-label">{`${channelMembers}${channelMembersLabel}`}</span>
            </div>
        </div>
    )
}

export default ChannelShowHeader;