import React from "react";
import {months} from "../../../util/date_util"

export const AboutChannel = ({channel, creator}) => {

    let channelTopic = (channel && channel.topic) ? channel.topic : "Add a topic";
    let channelDescription = (channel && channel.description) ? channel.description : "Add a description";
    let channelCreator = (creator && creator.displayName) ? creator.displayName: "Anonymous";
    let createdDateObj = channel ? new Date(channel.createdAt) : "";
    let createdDate = channel ? `${months[createdDateObj.getMonth()]} ${createdDateObj.getDate()}, ${createdDateObj.getFullYear()}` : "";

    return (
        <ul className="about-channel-container">
            <li className="about-channel-list-item">
                <div className="about-channel-list-item-top">
                    <h3 className="about-item-title">Topic</h3>
                    <button className="about-channel-edit-button">Edit</button>
                </div>
                <span className="about-item-detail">{channelTopic}</span>
            </li>
            <li className="about-channel-list-item">
                <div className="about-channel-list-item-top">
                    <h3 className="about-item-title">Description</h3>
                    <button className="about-channel-edit-button">Edit</button>
                </div>
                <span className="about-item-detail">{channelDescription}</span>
            </li>
            <li className="about-channel-list-item">
                <div className="about-channel-list-item-top">
                    <h3 className="about-item-title">Created By</h3>
                </div>
                <span className="about-item-detail">{`${channelCreator} on ${createdDate}`}</span>
            </li>
            <li className="leave-channel-modal-button">
                <button>Leave Channel</button>
            </li>
        </ul>
    )
}