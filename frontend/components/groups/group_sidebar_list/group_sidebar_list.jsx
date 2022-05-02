import React from "react";
import { Link } from "react-router-dom";
import GroupSidebarListItem from "./group_sidebar_list_item";

export default class GroupSidebarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showGroups: true,
            showAddGroupButton: false
        }

        this.toggleShowGroups = this.toggleShowGroups.bind(this);
        this.toggleAddGroupButton= this.toggleAddGroupButton.bind(this);
    }

    toggleShowGroups(e) {
        this.setState({
            showGroups: !this.state.showGroups
        })
    }

    toggleAddGroupButton(e) {
        this.setState({
            showAddGroupButton: !this.state.showAddGroupButton
        })
    }

    render() {
        const rotateArrow = this.state.showGroups ? "" : "rotate-90";
        const hideGroups = this.state.showGroups ? "" : "hidden";
        const showAddGroupButton = this.state.showAddGroupButton ? "" : "hidden";

        return (
            <div className="sidebar-list">
                <div onMouseEnter={this.toggleAddGroupButton} onMouseLeave={this.toggleAddGroupButton} className="sidebar-list-header">
                    <div onClick={this.toggleShowGroups} className="sidebar-list-header-left">
                        <div className="sidebar-button-image-container">
                            <img src={window.downArrow} alt="down arrow" className={`sidebar-button ${rotateArrow}`}></img>
                        </div>
                        <span className="sidebar-list-header-title">Direct Messages</span>
                    </div>
                    <div className={`sidebar-button-image-container ${showAddGroupButton}`}>
                        <img src={window.plus} alt="plus" className="sidebar-button-plus"></img>
                    </div>
                </div>
                <ul className={`${hideGroups}`}>
                    {this.props.groups.map((group, idx) => <GroupSidebarListItem key={idx} group={group} />)}
                </ul>
                <ul>
                    <Link to="/user-dashboard/browse-channels" className="sidebar-link">
                        <li className={`sidebar-list-item last-item ${hideGroups}`}>
                            <div className="add-margin-right">
                                <div className="sidebar-button-image-container-bottom">
                                    <img src={window.plusThick} alt="plus" className="sidebar-button-plus-bottom"></img>
                                </div>
                            </div>
                            <span className="sidebar-item-name">Add Teammates</span>
                        </li>
                    </Link>
                </ul>
            </div>
        )
    }
}