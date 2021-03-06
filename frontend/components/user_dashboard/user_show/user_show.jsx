import React from "react";
import { Link } from "react-router-dom";

export default class UserShow extends React.Component {
    constructor(props) {
        super(props)
        this.displayEditModal = this.displayEditModal.bind(this);
        this.openDirectMessage = this.openDirectMessage.bind(this);
        this.hideUserShow = this.hideUserShow.bind(this);
    }

    componentDidMount() {
        if (!this.props.user && this.props.userId) {
            this.props.fetchUser(this.props.userId)
                .then(() => { }, () => this.hideUserShow());
        }
    }

    displayEditModal(e) {
        this.props.toggleEditModal();
    }

    openDirectMessage(e) {

    }

    hideUserShow() {
        let newPathname = this.props.history.location.pathname.split("/users")[0];
        this.props.history.push(newPathname);
    }

    render() {

        if (!this.props.user && this.props.userId) {
            this.props.fetchUser(this.props.userId)
                .then(() => { }, () => this.hideUserShow());
        }

        let displayName = "";
        let title = "";
        let userShowActionLabel = "";
        let buttonImg;
        let userActionButton = <div></div>;
        let hidden = "hidden";

        if(this.props.user) {
            displayName = this.props.user.displayName;
            title = (this.props.user.title) ? this.props.user.title : "";
            userShowActionLabel = (this.props.user.id === this.props.currentUser.id) ?
                "Edit profile" : "Message";
            buttonImg = (this.props.user.id === this.props.currentUser.id) ?
                window.pencilIcon : window.messageIcon;

            const linkInfo = {
                pathname: "/user-dashboard/new-message",
                selectedUser: this.props.user
            };
            userActionButton = (this.props.user.id === this.props.currentUser.id) ? (
                <button onClick={this.displayEditModal} className="user-show-button">
                    <img className="user-show-button-img" src={buttonImg} alt="action" />
                </button>
            ) : (
                <Link to={linkInfo}>
                    <button className="user-show-button">
                        <img className="user-show-button-img" src={buttonImg} alt="action" />
                    </button>
                </Link>
            )
            
        }

        if(this.props.userId) {
            hidden = "";
        }

        let userShowDetails = this.props.user ? (
            <div className="user-show-details">
                <div className="user-show-image">
                    <strong className="user-show-initial">{displayName[0]}</strong>
                </div>
                <strong className="user-show-display-name">{displayName}</strong>
                <span className="user-show-title">{title}</span>
                <div className="user-show-action">
                    {userActionButton}
                    <span className="user-show-action-label">{userShowActionLabel}</span>
                </div>
            </div>
        ) : (
            <div></div>
        )

        return (
            <div className={`user-dashboard-user-show ${hidden}`}>
                <div className="user-show-header">
                    <span className="user-show-header-title">Profile</span>
                    <button onClick={this.hideUserShow} className="user-show-close-button">
                        <span>&times;</span>
                    </button>
                </div>
                {userShowDetails}
            </div>
        )
    }
}