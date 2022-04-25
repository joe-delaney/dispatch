import React from "react";
import SplashPageContainer from "./splash_page/splash_page_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container";
import {AuthRoute, ProtectedRoute} from "../util/route_util";
import UserDashboardContainer from "./user_dashboard/user_dashboard_container";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/user-dashboard" component={UserDashboardContainer} />
            <Route exact path="/" component={SplashPageContainer}/>
        </Switch>
    </div>
);

export default App;