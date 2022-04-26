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
        return (
            <div className="user-dashboard-user-show">
                <div className="user-show-header">
                    <span className="user-show-header-title">Profile</span>
                    <Link to="/user-dashboard" className="user-show-close-button">
                        <span>&times;</span>
                    </Link>
                </div>
                <span>{this.props.user.displayName}</span>
            </div>
        )
    }
}