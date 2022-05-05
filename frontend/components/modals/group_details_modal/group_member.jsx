import React from "react";

export class GroupMember extends React.Component {
    constructor(props) {
        super(props);
        this.showProfile = this.showProfile.bind(this);
    }

    showProfile() {
        let base = this.props.ownProps.history.location.pathname.split("/users")[0];
        this.props.ownProps.history.push(`${base}/users/${this.props.member.id}`)
        this.props.toggleModal();
    }

    render() {
        const title = (this.props.member && this.props.member.title) ? this.props.member.title : "";
        let displayName = " ";
        if (this.props.member) {
            if (this.props.currentUser && this.props.currentUser.id === this.props.member.id) {
                displayName = `${this.props.member.displayName} (you)`
            } else {
                displayName = this.props.member.displayName
            }
        }


        return (
            <li onClick={this.showProfile} className="channel-modal-member">
                <div className="channel-modal-member-contents">
                    <div className="channel-modal-member-image">
                        <strong className="channel-modal-member-initial">{displayName[0]}</strong>
                    </div>
                    <div className="channel-modal-member-labels">
                        <span className="channel-modal-member-name">{displayName}</span>
                        <span className="channel-modal-member-title">{title}</span>
                    </div>
                </div>
            </li>
        )
    }
}