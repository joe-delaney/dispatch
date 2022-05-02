import React from "react";
import { Link } from "react-router-dom";

const GroupSidebarListItem = ({group}) => {
    let name =  group.name.length > 30 ? `${group.name.substring(0,31)}...` : group.name


    return (
        <Link to={`/user-dashboard/message-groups/${group.id}`} className="sidebar-list-item-container">
            <li className="sidebar-list-item">
                <div className="sidebar-list-item-image">
                    <strong className="sidebar-list-item-initial">{group.name[0]}</strong>
                </div>
                <span className="sidebar-item-name">{name}</span>
            </li>
        </Link>
    )
}

export default GroupSidebarListItem;