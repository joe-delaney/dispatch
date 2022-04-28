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

    handleInput(e) {
        this.setState({query: e.target.value})
    }

    render()  {
        const channels = this.props.channels(this.state.query)
        const channelsLabel = channels.length === 1 ? "channel" : "channels"

        return (
            <div className="user-dashboard-center-main">
                    <div className="user-dashboard-center-main-feed">
                        <div className="channel-browser-container">
                        <input className="channel-browser-search-bar" type="text" value={this.state.query} onChange={this.handleInput} placeholder='Search by channel name'/>
                            <span className="channels-browser-label">{channels.length} {channelsLabel}</span>
                             <ul className="channel-browser-items">
                                {channels.map((channel, idx) => (
                                    <ChannelBrowserItem 
                                        key={`${channel.name}${idx}`} 
                                        channel={channel}
                                        currentUser={this.props.currentUser}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>
            </div>  
        )
    }
}