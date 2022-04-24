import React from "react";
import { Link } from "react-router-dom";
// import img from "../../../app/assets/images/splash-page-main-logged-out.jpg"

const MainSplashPageSection = ({demoClicked}) => {

    return (
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
            </div>
        </div>
    )
}

export default MainSplashPageSection;