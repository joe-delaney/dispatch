import React from "react";

const GroupSidebarListItem = ({group}) => {
    return (
        <li className="sidebar-list-item">
            <span className="sidebar-hashtag">{` `}</span>
            <span className="sidebar-item-name">{group.name}</span>
        </li>
    )
}

export default GroupSidebarListItem;