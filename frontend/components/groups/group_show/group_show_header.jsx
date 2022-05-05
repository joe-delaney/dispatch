import React from "react";

const GroupShowHeader = ({ group, toggleModal}) => {
    const groupName = group ? group.name : "";
    const groupMembers = group ? group.name.split(",").length + 1 : 0;
    const groupMembersLabel = groupMembers === 1 ? " member" : " members";
    const membersIcon = groupMembers > 2 ? (
        <div onClick={toggleModal} className="show-members-icon">
            <span className="show-members-icon-label">{`${groupMembers}${groupMembersLabel}`}</span>
        </div>
    ) : <div></div>

    return (
        <div className="show-header">
            <div className="show-header-left">
                <div onClick={toggleModal} className="show-header-text">
                    <h1 >{`${groupName}`}</h1>
                    <span className="show-down-carret">ˇ</span>
                </div>
            </div>
            {membersIcon}
        </div>
    )
}

export default GroupShowHeader;