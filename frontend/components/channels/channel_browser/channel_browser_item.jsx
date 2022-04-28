import React from "react";
import {Link} from "react-router-dom";

class ChannelBrowserItem extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            showButtons: false
        }

        this.toggleButtons = this.toggleButtons.bind(this);
    }

    toggleButtons(e) {
        this.setState({
            showButtons: !this.state.showButtons
        })
    }

    render() {

        let hidden = this.state.showButtons ? "" : "hidden"
        let subscription = {
            subscriber_id: this.props.currentUser.id,
            subscribable_id: this.props.channel.id,
            subscribable_type: "Channel"
        }

        let subscribedButton = <div></div>;
        if (this.props.currentUser) {
            let subscribed = this.props.currentUser.subscribedChannelIds.includes(this.props.channel.id);
            subscribedButton = subscribed ? (
                <button onClick={() => this.props.unsubscribe(subscription)} className={`channel-browser-item-button browser-button-light ${hidden}`}>Leave</button>
            ) : (
                <button onClick={() => this.props.subscribe(subscription)} className={`channel-browser-item-button browser-button-dark ${hidden}`}>Join</button>
            )
        }

        return (
            
            <li onMouseEnter={this.toggleButtons} onMouseLeave={this.toggleButtons} className="channel-browser-item">
                    <Link className="channel-browser-link-to-channel" to={`/user-dashboard/channels/${this.props.channel.id}`}>
                        <div className="channel-browser-label-container">
                            <span className="channel-browser-item-title">{`# ${this.props.channel.name}`}</span>
                            <span className="channel-browser-item-subtitle">{`${this.props.channel.channelMemberIds.length} members`}</span>
                        </div>
                    </Link >
                    <div className="channel-browser-item-buttons">
                        {subscribedButton}
                    </div>
            </li>
        )
    }
}

export default ChannelBrowserItem;