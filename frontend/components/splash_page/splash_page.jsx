import React from "react";
import WelcomeNavBar from "./welcome_nav_bar";

const SplashPage = ({currentUser, logout}) => (
    <section className="top-splash-page-section">
        <WelcomeNavBar logout={logout} currentUser={currentUser}/>
    </section>
);

export default SplashPage;