import React from "react";
import ChannelSidebarListItem from "./channel_sidebar_list_item";
import { Link } from "react-router-dom";

class ChannelSidebarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showChannels: true,
            showAddChannelButton: false
        }

        this.toggleShowChannels = this.toggleShowChannels.bind(this);
        this.toggleAddChannelButton = this.toggleAddChannelButton.bind(this);
    }

    toggleShowChannels(e) {
        this.setState({
            showChannels: !this.state.showChannels
        })
    }

    toggleAddChannelButton(e) {
        this.setState({
            showAddChannelButton: !this.state.showAddChannelButton
        })
    }

    render() {
        const rotateArrow = this.state.showChannels ? "" : "rotate-90";
        const hideChannels = this.state.showChannels ? "" : "hidden";
        const hideAddChannelButton = this.state.showAddChannelButton ? "" : "hidden";

        return (
            <div className="sidebar-list">
                <div onMouseEnter={this.toggleAddChannelButton}  onMouseLeave={this.toggleAddChannelButton} className="sidebar-list-header">
                    <div onClick={this.toggleShowChannels} className="sidebar-list-header-left">
                        <div className="sidebar-button-image-container">
                            <img src={window.downArrow} alt="down arrow" className={`sidebar-button ${rotateArrow}`}></img>
                        </div>
                        <span className="sidebar-list-header-title">Channels</span>
                    </div>
                    <div onClick={this.props.toggleModal} className={`sidebar-button-image-container ${hideAddChannelButton}`}>
                        <img src={window.plus} alt="plus" className="sidebar-button-plus"></img>
                    </div>
                </div>
                <ul className={`${hideChannels}`}>
                    {this.props.channels.map((channel, idx) => <ChannelSidebarListItem key={idx} channel={channel} />)}
                </ul>
                <ul>
                    <Link to="/user-dashboard/browse-channels" className="sidebar-link">
                    <li className={`sidebar-list-item last-item ${hideChannels}`}>
                        <div className="add-margin-right">
                            <div className="sidebar-button-image-container-bottom">
                                <img src={window.plusThick} alt="plus" className="sidebar-button-plus-bottom"></img>
                            </div>
                        </div>
                        <span className="sidebar-item-name">Browse Channels</span>
                    </li>
                    </Link>
                </ul>
            </div>
        )
    }  
}

export default ChannelSidebarList;