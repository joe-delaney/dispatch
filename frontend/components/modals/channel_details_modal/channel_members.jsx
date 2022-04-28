import React from "react";
import { ChannelMember } from "./channel_member";

export const ChannelMembers = ({members}) => {
    console.log(members);
    return (
        <ul className="channel-modal-members">
            {members.map((member, idx) => <ChannelMember key={`${member.displayName}idx`} member={member}/>)}
        </ul>
    )
}