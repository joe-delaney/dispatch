import React from "react";
import { Link } from "react-router-dom";

export default class ChannelShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.channelId
        }
    }

    componentDidMount() {
        this.props.fecthChannelInfo(this.props.match.params.channelId);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.id !== this.props.match.params.channelId) {
            this.props.fecthChannelInfo(this.props.match.params.channelId);
            this.setState({
                id: this.props.match.params.channelId
            })
        }
    }

    render() {
        let headerText = this.props.channel ? this.props.channel.name : "";

        let bottomComponent = <div></div>;
        if (this.props.currentUser && this.props.channel) {
            let subscribed = this.props.currentUser.subscribedChannelIds.includes(this.props.channel.id);
            bottomComponent = subscribed ? (
                <div></div>
            ) : (
                <div className="unsubscribed-to-channel-container">
                    <span className="channel-show-header-text">{`# ${headerText}`}</span>
                    <div className="unsubscribed-to-channel-buttons">
                        <button className="unsubscribed-to-channel-button unsubscribed-details">Details</button>
                        <button className="unsubscribed-to-channel-button unsubscribed-join">Join Channel</button>
                    </div>
                    <Link to="/user-dashboard/browse-channels" className="back-to-channel-browser">Back to Channel Browser</Link>
                </div>
            )
            
        }



        return (
            <div className="user-dashboard-center-main">
                <div className="user-dashboard-center-main-feed">
                </div>
                {bottomComponent}
            </div> 
        )
    }
}