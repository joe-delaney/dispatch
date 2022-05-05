import React from "react";
import UserDashboardSidebar from "./user_dashboard_sidebar";
import UserDashboardCenter from "./user_dashboard_center";
import {Route, Switch} from "react-router-dom";
import UserShowContainer from "../user_show/user_show_container"
import {ProtectedRoute} from "../../../util/route_util"

const UserDashboardMain = () => {
    return (
        <div className="user-dashboard-main">
            <UserDashboardSidebar/>
            <UserDashboardCenter />
            <UserShowContainer/>
        </div>
    )
}

export default UserDashboardMain;