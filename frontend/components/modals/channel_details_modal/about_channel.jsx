import React from "react";
import {months} from "../../../util/date_util"
import { Link } from "react-router-dom";

export class AboutChannel extends React.Component {
    constructor(props) {
        super(props);

        this.leaveChannel = this.leaveChannel.bind(this);
        this.joinChannel = this.joinChannel.bind(this);
    }

    leaveChannel(e) {
        let subscription;
        if (this.props.channel && this.props.currentUser) {
            subscription = {
                subscriber_id: this.props.currentUser.id,
                subscribable_id: this.props.channel.id,
                subscribable_type: "Channel"
            }
            this.props.unsubscribe(subscription);
        }
        this.props.toggleModal();
    }

    joinChannel(e) {
        let subscription;
        if (this.props.channel && this.props.currentUser) {
            subscription = {
                subscriber_id: this.props.currentUser.id,
                subscribable_id: this.props.channel.id,
                subscribable_type: "Channel"
            }
            this.props.subscribe(subscription);
        }
        this.props.toggleModal();
    }

    render() {
        let channelTopic = (this.props.channel && this.props.channel.topic) ? this.props.channel.topic : "Add a topic";
        let channelDescription = (this.props.channel && this.props.channel.description) ? this.props.channel.description : "Add a description";
        let channelCreator = (this.props.creator && this.props.creator.displayName) ? this.props.creator.displayName : "Anonymous";
        let createdDateObj = this.props.channel ? new Date(this.props.channel.createdAt) : "";
        let createdDate = this.props.channel ? `${months[createdDateObj.getMonth()]} ${createdDateObj.getDate()}, ${createdDateObj.getFullYear()}` : "";
        let subscribedButton = <div></div>;                   
        if(this.props.currentUser && this.props.channel) {
            let subscribed = this.props.currentUser.subscribedChannelIds.includes(this.props.channel.id);
            subscribedButton = subscribed ? (
                (<li className="channel-modal-button leave-channel-modal-button">
                    <Link className="leave-channel-link" to="/user-dashboard/browse-channels">
                        <button onClick={this.leaveChannel}>Leave Channel</button>
                    </Link>
                </li>)
            ) : (
                (<li className="channel-modal-button join-channel-modal-button">
                    <button onClick={this.joinChannel}>Join Channel</button>
                </li>)
            )
        }

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
                {subscribedButton}
            </ul>
        )
    }
} 