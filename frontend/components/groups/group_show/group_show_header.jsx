import React from "react";

const GroupShowHeader = ({ group }) => {
    const groupName = group ? group.name : "";
    const groupMembers = group ? group.name.split(",").length + 1 : 0;
    const groupMembersLabel = groupMembers === 1 ? " member" : " members";

    return (
        <div className="channel-show-header">
            <div className="channel-show-header-left">
                <div className="channel-show-header-text">
                    <h1 >{`${groupName}`}</h1>
                    <span className="channel-show-down-carret">ˇ</span>
                </div>
            </div>
            <div className="channel-show-members-icon">
                <span className="channel-show-members-icon-label">{`${groupMembers}${groupMembersLabel}`}</span>
            </div>
        </div>
    )
}

export default GroupShowHeader;