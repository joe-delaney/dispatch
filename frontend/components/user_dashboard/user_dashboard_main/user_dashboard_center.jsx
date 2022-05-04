import React from "react";
import { BlankDashboardCenter } from "./blank_dashboard-center";
import ChannelBrowserContainer from "../../channels/channel_browser/channel_browser_container";
import ChannelBrowserHeader from "../../channels/channel_browser/channel_browser_header";
import ChannelShowHeaderContainer from "../../channels/channel_show/channel_show_header_container";
import ChannelShowContainer from "../../channels/channel_show/channel_show_container";
import GroupShowHeaderContainer from "../../groups/group_show/group_show_header_container";
import GroupShowContainer from "../../groups/group_show/group_show_container";
import AllDMsContainer from "../../groups/all_dms/all_dms_container";
import AllDMsHeader from "../../groups/all_dms/all_dms_header";
import NewMessageHeader from "../../messages/new_message_view/new_message_view_header";
import NewMessageViewContainer from "../../messages/new_message_view/new_message_view";
import { ProtectedRoute } from "../../../util/route_util";
import { Switch, Route } from "react-router-dom";

export default class UserDashboardCenter extends React.Component {
    render() {
        return (
            <div className="user-dashboard-center">
                <div className="user-dashboard-center-header">
                    <ProtectedRoute path="/user-dashboard/browse-channels" component={ChannelBrowserHeader}></ProtectedRoute>
                    <ProtectedRoute path="/user-dashboard/all-dms" component={AllDMsHeader}></ProtectedRoute>
                    <ProtectedRoute path="/user-dashboard/channels/:channelId" component={ChannelShowHeaderContainer}></ProtectedRoute>
                    <ProtectedRoute path="/user-dashboard/message-groups/:groupId" component={GroupShowHeaderContainer}></ProtectedRoute>
                    <ProtectedRoute path="/user-dashboard/new-message" component={NewMessageHeader}></ProtectedRoute>
                </div>
                <Switch>
                    <ProtectedRoute path="/user-dashboard/browse-channels" component={ChannelBrowserContainer}></ProtectedRoute>
                    <ProtectedRoute path="/user-dashboard/channels/:channelId" component={ChannelShowContainer}></ProtectedRoute>
                    <ProtectedRoute path="/user-dashboard/message-groups/:groupId" component={GroupShowContainer}></ProtectedRoute>
                    <ProtectedRoute path="/user-dashboard/all-dms" component={AllDMsContainer}></ProtectedRoute>
                    <ProtectedRoute path="/user-dashboard/new-message" component={NewMessageViewContainer}></ProtectedRoute>
                    <Route path="/user-dashboard" component={BlankDashboardCenter}></Route>
                </Switch>
            </div> 
        )
    }
}