import React from "react";

export const ChannelMember = ({member}) => {
    const title = member.title ? member.title : "";

    return (
        <li className="channel-modal-member">
            <div className="channel-modal-member-contents">
                <div className="channel-modal-member-image">
                    <strong className="channel-modal-member-initial">{member.displayName[0]}</strong>
                </div>
                <div className="channel-modal-member-labels">
                    <span className="channel-modal-member-name">{member.displayName}</span>
                    <span className="channel-modal-member-title">{title}</span>
                </div>
            </div>
        </li>
    )
}