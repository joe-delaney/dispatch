import React from "react";

export default class AllDMsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const groupName = this.props.group ? this.props.group.name : "";
        const groupNameInitial = this.props.group ? this.props.group.name[0] : "";
        return (
            <li className="all-dms-item">
                <div className="all-dms-item-image">
                    <strong className="all-dms-item-initial">{groupNameInitial}</strong>
                </div>
                <div className="all-dms-item-right">
                    <div className="all-dms-item-content">
                        <strong className="all-dms-group-name">{groupName}</strong>
                        <span className="all-dms-last-message">You: Insert message here</span>
                    </div>
                    <div className="all-dms-item-time-label">
                        <span>10:00 AM</span>
                    </div>
                </div>
            </li>
        )
    }
}