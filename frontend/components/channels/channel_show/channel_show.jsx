import React from "react";
import UnsubscribedBottomComponent from "./unsubscribedBottomComponent";
import MessageComposerContainer from "../../messages/message_composer_container";
import MessageFeedContainer from "../../messages/message_feed_container";
import consumer from "../../../consumer";

export default class ChannelShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.channelId
        }
    }

    enterRoom() {
        this.subscription = consumer.subscriptions.create(
            { channel: 'ChannelsChannel', id: this.props.match.params.channelId },
            {
                received: info => {
                    this.props.receiveChannelInfo(info);
                }
            }
        );
    }

    componentDidMount() {
        this.props.fecthChannelInfo(this.props.match.params.channelId)
            .then(info => this.props.receiveChannelInfo(info));
        this.enterRoom();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.id !== this.props.match.params.channelId) {
            this.props.fecthChannelInfo(this.props.match.params.channelId)
                .then(info => this.props.receiveChannelInfo(info));
            this.setState({
                id: this.props.match.params.channelId
            })
            this.subscription?.unsubscribe();
            this.enterRoom();
        }
    }

    componentWillUnmount() {
        this.subscription?.unsubscribe();
    }

    render() {
        let bottomComponent = <div></div>;
        let mainFeedComponent = <div></div>
        if (this.props.currentUser && this.props.channel) {
            let subscribed = this.props.currentUser.subscribedChannelIds.includes(this.props.channel.id);
            bottomComponent = subscribed ? (
                <MessageComposerContainer
                    parent={this.props.channel}
                    type={"Channel"}
                    currentUser={this.props.currentUser}
                />
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