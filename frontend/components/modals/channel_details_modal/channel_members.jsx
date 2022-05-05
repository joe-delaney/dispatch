import React from "react";
import { ChannelMember } from "./channel_member";

export const ChannelMembers = ({members, currentUser, ownProps, toggleModal}) => {
    return (
        <ul className="channel-modal-members">
            {members.map((member, idx) => <ChannelMember 
                                                key={idx} 
                                                member={member} 
                                                currentUser={currentUser}
                                                ownProps={ownProps}
                                                toggleModal={toggleModal}
                                          />)}
        </ul>
    )
}