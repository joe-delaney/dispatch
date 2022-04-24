import React from "react";
import WelcomeNavBar from "./welcome_nav_bar";
import MainSplashPageSection from "./main_splash_page_section";

const SplashPage = ({currentUser, logout, demoClicked}) => (
    <div className="splash-page">
        <section>
            <WelcomeNavBar logout={logout} currentUser={currentUser} demoClicked={demoClicked}/>
        </section>
        <section>
            <MainSplashPageSection currentUser={currentUser} demoClicked={demoClicked}/>
        </section>
    </div>
);

export default SplashPage;