import React from "react";
import SplashPageContainer from "./splash_page/splash_page_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container"
import SignupFormContainer from "./session/signup_form_container";

const App = () => (
    <div>
        <Switch>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route exact path="/signup" component={SignupFormContainer} />
            <Route path="/" component={SplashPageContainer}/>
        </Switch>
    </div>
);

export default App;