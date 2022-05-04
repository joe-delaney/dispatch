import React from "react";
import { Link } from "react-router-dom";

export default class NewMessageViewChannelSearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const name = this.props.channel.name;
        const topic = this.props.channel.topic ? `• ${this.props.channel.title}` : "";

        return (
            <Link onClick={this.props.clearSearchBar} to={`/user-dashboard/channels/${this.props.channel.id}`}>
                <li className="search-result">
                    <div className="search-result-hashtag">
                        <span className="search-result-img-initial">{"#"}</span>
                    </div>
                    <span className="search-result-display-text">{name}</span>
                    <span className="search-result-title">{topic}</span>
                </li>
            </Link>
        )
    }
}