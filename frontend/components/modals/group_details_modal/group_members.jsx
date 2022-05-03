import React from "react";
import { GroupMember } from "./group_member";

export const GroupMembers = ({ members, currentUser }) => {
    return (
        <ul className="channel-modal-members">
            {members.map((member, idx) => <GroupMember key={idx} member={member} currentUser={currentUser} />)}
        </ul>
    )
}