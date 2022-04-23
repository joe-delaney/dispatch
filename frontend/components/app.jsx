import React from "react";
import SplashPageContainer from "./splash_page/splash_page_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container";
import {AuthRoute} from "../util/route_util";

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={SplashPageContainer}/>
        </Switch>
    </div>
);

export default App;