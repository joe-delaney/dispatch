import React from "react";
import UnsubscribedBottomComponent from "./unsubscribedBottomComponent";
import MessageComposer from "../../messages/message_composer";
import MessageFeedContainer from "../../messages/message_feed_container";

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
        let mainFeedComponent = <div></div>
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
            if(subscribed) mainFeedComponent = <MessageFeedContainer 
                                                    parent={this.props.channel}
                                                    messagable_type={"Channel"}
                                                />
        }
        return (
            <div className="user-dashboard-center-main">
                <div className="user-dashboard-center-main-feed">
                    {mainFeedComponent}
                </div>
                {bottomComponent}
            </div> 
        )
    }
}