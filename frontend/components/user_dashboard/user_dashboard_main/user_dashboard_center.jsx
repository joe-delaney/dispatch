import React from "react";
import ChannelBrowserContainer from "../../channels/channel_browser_container";
import { ProtectedRoute } from "../../../util/route_util";
import { Switch } from "react-router-dom";

export default class UserDashboardCenter extends React.Component {
    render() {
        return (
            <div className="user-dashboard-center">
                <div className="user-dashboard-center-header">
                    <ProtectedRoute path="/user-dashboard/browse-channels" component={ChannelBrowserContainer}></ProtectedRoute>
                </div>
                <div className="user-dashboard-center-main">
                    <div className="user-dashboard-center-main-feed">
                        <ProtectedRoute path="/user-dashboard/browse-channels" component={ChannelBrowserContainer}></ProtectedRoute>
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