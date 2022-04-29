import React from "react";
import { Link } from "react-router-dom";

class UnsubscribedBottomComponent extends React.Component {
    constructor(props) {
        super(props);

        this.joinChannel = this.joinChannel.bind(this);
    }

    joinChannel() {
        let subscription;
        if (this.props.channel && this.props.currentUser) {
            subscription = {
                subscriber_id: this.props.currentUser.id,
                subscribable_id: this.props.channel.id,
                subscribable_type: "Channel"
            }
            this.props.subscribe(subscription);
        }
    }

    render() {
        let headerText = this.props.channel ? this.props.channel.name : "";
        return (
            <div className="unsubscribed-to-channel-container">
                <span className="channel-show-header-text">{`# ${headerText}`}</span>
                <div className="unsubscribed-to-channel-buttons">
                    <button onClick={this.props.toggleModal} className="unsubscribed-to-channel-button unsubscribed-details">Details</button>
                    <button onClick={this.joinChannel} className="unsubscribed-to-channel-button unsubscribed-join">Join Channel</button>
                </div>
                <Link to="/user-dashboard/browse-channels" className="back-to-channel-browser">Back to Channel Browser</Link>
            </div>
        )
    }
}

export default UnsubscribedBottomComponent;