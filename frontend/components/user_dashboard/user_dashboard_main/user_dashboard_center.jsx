import React from "react";

export default class UserDashboardCenter extends React.Component {
    render() {
        return (
        <div className="user-dashboard-center">
            <div className="user-dashboard-center-header">
            </div>
            <div className="user-dashboard-center-main">
                <div className="user-dashboard-center-main-feed">

                </div>
                <div className="user-dashboard-center-main-message-composer">
                    <div className="user-dashboard-message-container">
                        <textarea type="text" className="message-input" placeholder="Write your message here..."/>
                            <button className="send-message-button">Send</button>
                    </div>
                </div>
            </div>

        </div>
        )
    }
}