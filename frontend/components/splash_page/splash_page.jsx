import React from "react";
import WelcomeNavBar from "./welcome_nav_bar";

const SplashPage = ({currentUser, logout}) => (
    <div className="splash-page">
        <section className="top-splash-page-section">
            <WelcomeNavBar logout={logout} currentUser={currentUser}/>
        </section>
    </div>
);

export default SplashPage;