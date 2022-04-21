import React from "react";
import WelcomeNavBar from "./welcome_nav_bar";

const SplashPage = ({currentUser, logout}) => (
    <WelcomeNavBar logout={logout} currentUser={currentUser}/>
);

export default SplashPage;