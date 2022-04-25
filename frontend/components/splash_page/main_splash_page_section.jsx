import React from "react";
import { Link } from "react-router-dom";
import mainSectionImage from "../../../app/assets/images/img-campaign-hero.png";
import welcomeWaving from "../../../app/assets/images/welcome-waving.gif";

const MainSplashPageSection = ({demoClicked, currentUser}) => {

    const title = currentUser && currentUser.title ? currentUser.title : "";
    const display = currentUser ? (
        <div className="splash-page-section-main-logged-in logged-in">
            <div className="welcome-back-header">
                <h1 className="welcome-back-h1">
                    <img className="waving-gif" src={welcomeWaving} alt="hello" />
                    <span className="welcome-back-header-text">Welcome back</span>
                </h1>
            </div>
            <div className="welcome-back-user-info-container">
                <div className="welcome-back-user-info-title">Slack for {currentUser.email}</div>
                <div>
                    <div className="welcome-back-user-info">
                        <img className="welcome-back-user-img" src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg?auto=webp&format=png" alt="slack-logo" />
                        <div className="welcome-back-user-details">
                            <span className="welcome-back-user-display-name">{currentUser.displayName}</span>
                            <span className="welcome-back-user-title">{title}</span>
                        </div>
                        <Link to="/user-dashboard" className="welcome-back-launch-slack">Launch Slack</Link>
                    </div>

                </div>
            </div>
        </div>
    ) : (
        <div className="splash-page-section-main logged-out">
            <div className="splash-page-section-main-left">
                <h1 className="splash-page-section-main-header">Slack is your digital HQ</h1>
                <p className="splash-page-section-main-description">Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
                <div className="splash-page-section-main-buttons">
                    <button className="splash-page-section-main-button try-demo-main" onClick={demoClicked}>Try a Demo</button>
                    <Link className="splash-page-section-main-button signup-main" to="/signup">Sign Up Here</Link>
                </div>
            </div>
            <div className="splash-page-section-main-right">
                <img className="splash-page-main-section-image" src={mainSectionImage} />
            </div>
        </div>
    )

    return display;
}

export default MainSplashPageSection;