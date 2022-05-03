import React from "react";
import {Link} from "react-router-dom"
import * as DateUtil from "../../../util/date_util"

export default class AllDMsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(!this.props.message) {
            this.props.fetchGroupInfo(this.props.group.id)
                .then(info => {
                    this.props.receiveGroupInfo(info)
            });
        }
    }

    render() {
        const groupName = this.props.group ? this.props.group.name : "";
        const groupNameInitial = this.props.group ? this.props.group.name[0] : "";
        const messageText = this.props.message ? this.props.message.text : "";

        let createdDate = this.props.message ? new Date(this.props.message.createdAt) : undefined;
        let time = createdDate ? DateUtil.getCurrentDateTime(createdDate) : "";

        let messageAuthor = "";
        if(this.props.author) {
            if(this.props.author.id === this.props.currentUser.id) {
                messageAuthor = "You: ";
            } else {
                messageAuthor = `${this.props.author.displayName.split(" ")[0]}:`
            }
        }


        return (
            <Link to={`/user-dashboard/message-groups/${this.props.group.id}`}>
                <li className="all-dms-item">
                    <div className="all-dms-item-image">
                        <strong className="all-dms-item-initial">{groupNameInitial}</strong>
                    </div>
                    <div className="all-dms-item-right">
                        <div className="all-dms-item-content">
                            <strong className="all-dms-group-name">{groupName}</strong>
                            <span className="all-dms-last-message">{`${messageAuthor} ${messageText}`}</span>
                        </div>
                        <div className="all-dms-item-time-label">
                            <span>{time}</span>
                        </div>
                    </div>
                </li>
            </Link>
        )
    }
}