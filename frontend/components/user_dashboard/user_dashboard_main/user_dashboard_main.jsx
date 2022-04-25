import React from "react";
import UserDashboardSidebar from "./user_dashboard_sidebar";
import UserDashboardCenter from "./user_dashboard_center";

const UserDashboardMain = () => {
    return (
        <div className="user-dashboard-main">
            <UserDashboardSidebar/>
            <UserDashboardCenter />
        </div>
    )
}

export default UserDashboardMain;