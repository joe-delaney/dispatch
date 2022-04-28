import React from "react";
import ChannelSidebarListItem from "./channel_sidebar_list_item";

class ChannelSidebarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChannels: true
        }

        this.toggleShowChannels = this.toggleShowChannels.bind(this);
    }

    toggleShowChannels(e) {
        this.setState({
            showChannels: !this.state.showChannels
        })
    }

    render() {
        const rotateArrow = this.state.showChannels ? "" : "rotate-90";
        const hidden = this.state.showChannels ? "" : "hidden";

        return (
            <div className="sidebar-list">
                <div className="sidebar-list-header">
                    <div onClick={this.toggleShowChannels} className="sidebar-list-header-left">
                        <div className="sidebar-button-image-container">
                            <img src={window.downArrow} alt="down arrow" className={`sidebar-button ${rotateArrow}`}></img>
                        </div>
                        <span className="sidebar-list-header-title">Channels</span>
                    </div>
                    <div className="sidebar-button-image-container">
                        <img src={window.plus} alt="plus" className="sidebar-button-plus"></img>
                    </div>
                </div>
                <ul className={`${hidden}`}>
                    {this.props.channels.map((channel, idx) => <ChannelSidebarListItem key={idx} channel={channel} />)}
                </ul>
                <ul>
                    <li className={`sidebar-list-item last-item ${hidden}`}>
                        <div className="add-margin-right">
                            <div className="sidebar-button-image-container-bottom">
                                <img src={window.plusThick} alt="plus" className="sidebar-button-plus-bottom"></img>
                            </div>
                        </div>
                        <span className="sidebar-item-name">Add Channels</span>
                    </li>
                </ul>
            </div>
        )
    }  
}

export default ChannelSidebarList;