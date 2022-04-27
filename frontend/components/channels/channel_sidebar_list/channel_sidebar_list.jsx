import React from "react";
import ChannelSidebarListItem from "./channel_sidebar_list_item";

class ChannelSidebarList {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar-list">
                <div className="sidebar-list-header">
                    <div className="sidebar-list-header-left">
                        <button className="sidebar-button">^</button>
                        <span className="sidebar-list-header-title">Channels</span>
                    </div>
                    <button className="sidebar-button">+</button>
                </div>
                <ul>
                    {this.props.channels.map((channel, idx) => <ChannelSidebarListItem key={idx} channel={channel} />)}
                </ul>
                <ul>
                    <li className="sidebar-list-item">
                        <button>+</button>
                        <span>Add Channels</span>
                    </li>
                </ul>
            </div>
        )
    }  
}

export default ChannelSidebarList;