import React from "react";
import { BlankDashboardCenter } from "./blank_dashboard-center";
import ChannelBrowserContainer from "../../channels/channel_browser_container";
import ChannelBrowserHeader from "../../channels/channel_browser_header";
import { ProtectedRoute } from "../../../util/route_util";
import { Switch, Route } from "react-router-dom";

export default class UserDashboardCenter extends React.Component {
    render() {
        return (
            <div className="user-dashboard-center">
                <div className="user-dashboard-center-header">
                    <ProtectedRoute path="/user-dashboard/browse-channels" component={ChannelBrowserHeader}></ProtectedRoute>
                </div>
                <Switch>
                    <ProtectedRoute path="/user-dashboard/browse-channels" component={ChannelBrowserContainer}></ProtectedRoute>
                    <Route path="/user-dashboard" component={BlankDashboardCenter}></Route>
                </Switch>
            </div> 
        )
    }
}