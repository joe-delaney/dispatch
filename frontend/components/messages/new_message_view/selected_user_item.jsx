import React from "react";

export default class SelectedUserItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="selected-user">
                <div className="selected-user-img">
                    <span className="selected-user-img-initial">{this.props.user.displayName[0]}</span>
                </div>
                <span className="selected-user-name">{this.props.user.displayName}</span>
                <button className="remove-selected-user-button">
                    <span>&times;</span>
                </button>
            </li>
        )
    }
}