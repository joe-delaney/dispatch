import React from "react";
import { Link } from "react-router-dom";

export default class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
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
                        <button className="user-show-button">
                            <img className="user-show-button-img" src={buttonImg} alt="action" />
                        </button>
                        <span className="user-show-action-label">{userShowActionLabel}</span>
                    </div>
                    
                </div>
            </div>
        )
    }
}