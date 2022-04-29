import React from "react";
import UnsubscribedBottomComponent from "./unsubscribedBottomComponent";
import MessageComposer from "../../messages/message_composer";

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
        let bottomComponent = <div></div>;
        if (this.props.currentUser && this.props.channel) {
            let subscribed = this.props.currentUser.subscribedChannelIds.includes(this.props.channel.id);
            bottomComponent = subscribed ? (
                <MessageComposer/>
            ) : (
                <UnsubscribedBottomComponent
                    channel={this.props.channel}
                    currentUser={this.props.currentUser}
                    subscribe={this.props.subscribe}
                    toggleModal={this.props.toggleModal}
                />
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