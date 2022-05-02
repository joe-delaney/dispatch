import React from "react";
import MessageComposerContainer from "../../messages/message_composer_container";
import MessageFeedContainer from "../../messages/message_feed_container";
import consumer from "../../../consumer";

export default class GroupShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="user-dashboard-center-main">
                <div className="user-dashboard-center-main-feed">
                    {/* {mainFeedComponent} */}
                </div>
                {/* {bottomComponent} */}
            </div>
        )
    }
}