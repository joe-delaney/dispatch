import React from "react";
import ChannelBrowserItem from "./channel_browser_item";

export default class ChannelBrowser extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchChannels();
    }

    render()  {
        return (
            <div className="user-dashboard-center-main">
                    <div className="user-dashboard-center-main-feed">
                        <div className="channel-browser-container">
                        <input className="channel-browser-search-bar" type="text" placeholder='Search by channel name'/>
                            <span className="channels-browser-label">{this.props.channels.length} channels</span>
                             <ul>
                                {this.props.channels.map((channel, idx) => (
                                    <ChannelBrowserItem key={`${channel.name}${idx}`} channel={channel}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="user-dashboard-center-main-message-composer">
                        <div className="user-dashboard-message-container">
                            <textarea type="text" className="message-input" placeholder="Write your message here..."/>
                            <button className="send-message-button">Send</button>
                        </div>
                    </div>
            </div>  
        )
    }
}