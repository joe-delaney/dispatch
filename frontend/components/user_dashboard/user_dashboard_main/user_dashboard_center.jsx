import React from "react";
import { BlankDashboardCenter } from "./blank_dashboard-center";
import ChannelBrowserContainer from "../../channels/channel_browser/channel_browser_container";
import ChannelBrowserHeader from "../../channels/channel_browser/channel_browser_header";
import ChannelShowHeaderContainer from "../../channels/channel_show/channel_show_header_container";
import ChannelShowContainer from "../../channels/channel_show/channel_show_container";
import GroupShowHeaderContainer from "../../groups/group_show/group_show_header_container";
import GroupShowContainer from "../../groups/group_show/group_show_container";
import { ProtectedRoute } from "../../../util/route_util";
import { Switch, Route } from "react-router-dom";

export default class UserDashboardCenter extends React.Component {
    render() {
        return (
            <div className="user-dashboard-center">
                <div className="user-dashboard-center-header">
                    <ProtectedRoute path="/user-dashboard/browse-channels" component={ChannelBrowserHeader}></ProtectedRoute>
                    <ProtectedRoute path="/user-dashboard/channels/:channelId" component={ChannelShowHeaderContainer}></ProtectedRoute>
                    <ProtectedRoute path="/user-dashboard/message-groups/:groupId" component={GroupShowHeaderContainer}></ProtectedRoute>
                </div>
                <Switch>
                    <ProtectedRoute path="/user-dashboard/browse-channels" component={ChannelBrowserContainer}></ProtectedRoute>
                    <ProtectedRoute path="/user-dashboard/channels/:channelId" component={ChannelShowContainer}></ProtectedRoute>
                    <ProtectedRoute path="/user-dashboard/message-groups/:groupId" component={GroupShowContainer}></ProtectedRoute>
                    <Route path="/user-dashboard" component={BlankDashboardCenter}></Route>
                </Switch>
            </div> 
        )
    }
}