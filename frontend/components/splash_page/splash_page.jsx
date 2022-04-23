import React from "react";
import WelcomeNavBar from "./welcome_nav_bar";

const SplashPage = ({currentUser, logout, demoClicked}) => (
    <div className="splash-page">
        <section className="top-splash-page-section">
            <WelcomeNavBar logout={logout} currentUser={currentUser} demoClicked={demoClicked}/>
        </section>
    </div>
);

export default SplashPage;