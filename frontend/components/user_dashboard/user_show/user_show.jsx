import React from "react";
import { Link } from "react-router-dom";

export default class UserShow extends React.Component {
    constructor(props) {
        super(props)
        this.displayEditModal = this.displayEditModal.bind(this);
        this.openDirectMessage = this.openDirectMessage.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
        .then(() => {}, () => this.props.history.push("/user-dashboard/browse-channels"));
    }

    displayEditModal(e) {
        this.props.toggleEditModal();
    }

    openDirectMessage(e) {
        console.log("MESSAGE");
    }

    render() {

        if(!this.props.user) {
            this.props.fetchUser(this.props.match.params.userId);
        }

        const displayName = this.props.user ? this.props.user.displayName : "";
        const title = (this.props.user && this.props.user.title) ? this.props.user.title : "";
        const userShowActionLabel = (this.props.user && this.props.user.id === this.props.currentUser.id) ?
            "Edit profile" : "Message";
        const buttonImg = (this.props.user && this.props.user.id === this.props.currentUser.id) ?
            window.pencilIcon : window.messageIcon;
        const clickAction = (this.props.user && this.props.user.id === this.props.currentUser.id) ?
            this.displayEditModal : this.openDirectMessage;

        return (
            <div className="user-dashboard-user-show">
                <div className="user-show-header">
                    <span className="user-show-header-title">Profile</span>
                    <Link to="/user-dashboard" className="user-show-close-button">
                        <span>&times;</span>
                    </Link>
                </div>
                <div className="user-show-details">
                    <div className="user-show-image">
                        <strong className="user-show-initial">{displayName[0]}</strong>
                    </div>
                    <strong className="user-show-display-name">{displayName}</strong>
                    <span className="user-show-title">{title}</span>
                    <div className="user-show-action">
                        <button onClick={clickAction} className="user-show-button">
                            <img className="user-show-button-img" src={buttonImg} alt="action" />
                        </button>
                        <span className="user-show-action-label">{userShowActionLabel}</span>
                    </div>
                </div>
            </div>
        )
    }
}