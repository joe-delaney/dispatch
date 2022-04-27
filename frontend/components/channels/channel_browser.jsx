import React from "react";
import ChannelBrowserItem from "./channel_browser_item";

export default class ChannelBrowser extends React.Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);

        this.state = ({
            query: ""
        })
    }

    componentDidMount() {
        this.props.fetchChannels();
    }

    handleInput(e) {
        this.setState({query: e.target.value})
        this.props.fetchChannels(e.target.value)
    }

    render()  {
        const channelsLabel = this.props.channels.length === 1 ? "channel" : "channels"

        return (
            <div className="user-dashboard-center-main">
                    <div className="user-dashboard-center-main-feed">
                        <div className="channel-browser-container">
                        <input className="channel-browser-search-bar" type="text" value={this.state.query} onChange={this.handleInput} placeholder='Search by channel name'/>
                            <span className="channels-browser-label">{this.props.channels.length} {channelsLabel}</span>
                             <ul>
                                {this.props.channels.map((channel, idx) => (
                                    <ChannelBrowserItem key={`${channel.name}${idx}`} channel={channel}/>
                                ))}
                            </ul>
                        </div>
                    </div>
            </div>  
        )
    }
}