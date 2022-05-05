import React from "react";
import MessageComposerContainer from "../../messages/message_composer_container";
import MessageFeedContainer from "../../messages/message_feed_container";
import consumer from "../../../consumer";

export default class GroupShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.groupId
        }
    }

    enterRoom() {
        this.subscription = consumer.subscriptions.create(
            { channel: 'GroupMessagesChannel', id: this.props.match.params.groupId },
            {
                received: info => {
                    this.props.receiveGroupInfo(info);
                }
            }
        );
    }

    componentDidMount() {
        this.props.fetchGroupInfo(this.props.match.params.groupId)
            .then(info => {
                this.props.receiveGroupInfo(info)
            });
        this.enterRoom();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.props.match.params.groupId) {
            this.props.fetchGroupInfo(this.props.match.params.groupId)
                .then(info => this.props.receiveGroupInfo(info));
            this.setState({
                id: this.props.match.params.groupId
            })
            this.subscription?.unsubscribe();
            this.enterRoom();
        }
    }

    componentWillUnmount() {
        this.subscription?.unsubscribe();
    }

    render() {
        return (
            <div className="user-dashboard-center-main">
                <div className="user-dashboard-center-main-feed">
                    <MessageFeedContainer
                        parent={this.props.group}
                        messagable_type={"GroupMessage"}
                    />
                </div>
                <MessageComposerContainer
                    parent={this.props.group}
                    type={"GroupMessage"}
                    currentUser={this.props.currentUser}
                />
            </div>
        )
    }
}