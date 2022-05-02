import React from "react";

const GroupSidebarListItem = ({group}) => {
    let name =  group.name.length > 30 ? `${group.name.substring(0,31)}...` : group.name


    return (
        <li className="sidebar-list-item">
            <div className="sidebar-list-item-image">
                <strong className="sidebar-list-item-initial">{group.name[0]}</strong>
            </div>
            <span className="sidebar-item-name">{name}</span>
        </li>
    )
}

export default GroupSidebarListItem;