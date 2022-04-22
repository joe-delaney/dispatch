import React from "react";
import SplashPageContainer from "./splash_page/splash_page_container";
import { Route, Switch } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container"

const App = () => (
    <div>
        <Switch>
            <Route exact path="/login" component={LoginFormContainer} />
            <Route path="/" component={SplashPageContainer}/>
        </Switch>
    </div>
);

export default App;