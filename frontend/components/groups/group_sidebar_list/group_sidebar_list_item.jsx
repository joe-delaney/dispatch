import React from "react";
import { Link } from "react-router-dom";

class GroupSidebarListItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showCloseButton: false
        }

        this.hideGroup = this.hideGroup.bind(this);
        this.hideCloseButton = this.hideCloseButton.bind(this);
        this.showCloseButton = this.showCloseButton.bind(this);
    }

    hideGroup() {
        let newGroup = {
            id: this.props.group.id,
            hidden: true
        }

        this.setState({
            showCloseButton: false
        })

        this.props.updateGroup(newGroup)
        .then(info => this.props.receiveGroupInfo(info));

        if (this.props.ownProps.location.pathname.includes(`/message-groups/${this.props.group.id}`)) {
            this.props.ownProps.history.push("/user-dashboard/new-message");
        }
    }

    hideCloseButton() {
        this.setState({
            showCloseButton: false
        })
    }

    showCloseButton() {
        this.setState({
            showCloseButton: true
        })
    }

    render() {
        let name =  this.props.group.name.length > 30 ? `${this.props.group.name.substring(0,31)}...` : this.props.group.name
        let hidden = this.state.showCloseButton ? "" : "hidden";
        let selected = this.props.ownProps.location.pathname.includes(`/message-groups/${this.props.group.id}`);
        let selectedItem = selected ? "selected-sidebar-item" : "";
        let showItem = (this.props.show || selected) ? "" : "hidden";

        let component = this.props.group.hidden ? (<div></div>) : (
                <li onMouseEnter={this.showCloseButton} onMouseLeave={this.hideCloseButton} className={`sidebar-list-item ${selectedItem} ${showItem}`}>
                    <div className="sidebar-list-item-wrapper">
                    <Link to={`/user-dashboard/message-groups/${this.props.group.id}`} className="sidebar-list-item-container">
                        <div className="sidebar-list-item-left">
                            <div className="sidebar-list-item-image">
                                <strong className="sidebar-list-item-initial">{this.props.group.name[0]}</strong>
                            </div>
                            <span className={`sidebar-item-name ${selectedItem}`}>{name}</span>
                        </div>
                    </Link>
                        <div onClick={this.hideGroup} className={`hide-group-button ${hidden} ${selectedItem}`} >
                            <span>&times;</span>
                        </div>
                    </div>
                </li>
        )

        return component;
    }
}

export default GroupSidebarListItem;