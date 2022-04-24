import React from "react";
import WelcomeNavBar from "./welcome_nav_bar";
import MainSplashPageSection from "./main_splash_page_section";
import DetailsSplashPageSection from "./details_splash_page_section";
import GetStartedSplashPageSection from "./get_started_splash_page_section";

const SplashPage = ({currentUser, logout, demoClicked}) => (
    <div className="splash-page">
        <section>
            <WelcomeNavBar logout={logout} currentUser={currentUser} demoClicked={demoClicked}/>
        </section>
        <section>
            <MainSplashPageSection currentUser={currentUser} demoClicked={demoClicked}/>
            <DetailsSplashPageSection />
            <GetStartedSplashPageSection/>
        </section>
    </div>
);

export default SplashPage;