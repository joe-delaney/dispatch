import React from "react";
import { ChannelMember } from "./channel_member";

export const ChannelMembers = ({members, currentUser}) => {
    return (
        <ul className="channel-modal-members">
            {members.map((member, idx) => <ChannelMember key={idx} member={member} currentUser={currentUser}/>)}
        </ul>
    )
}