import React from "react";
import { Link } from "react-router-dom";

const GetStartedSplashPageSection = ({demoClicked, currentUser, logout}) => {
    const getStartedSection = currentUser ? <div></div> : (
        <div className="get-started-section  logged-out">
            <header className="get-started-header">
                <h2 className="get-started-h2">Get started with Dispatch</h2>
            </header>
            <div className="get-started-instructions">
                <div className="get-started-instruction">
                    <div className="get-started-instruction-label">
                        <p>1</p>
                    </div>
                    <h3 className="get-started-h3">Sign Up</h3>
                    <p className="get-started-p">
                        <Link to="/signup" className="get-started-signup-link">Sign up for Dispatch</Link> in just a few moments. It's free to try for teams of any size.
                    </p>
                </div>
                <div className="get-started-instruction">
                    <div className="get-started-instruction-label">
                        <p>2</p>
                    </div>
                    <h3 className="get-started-h3">Invite your coworkers</h3>
                    <p className="get-started-p">
                        Dispatch is better together (no, really, it’s a bit underwhelming by yourself), and it’s easy to invite your team.
                    </p>
                </div>
                <div className="get-started-instruction">
                    <div className="get-started-instruction-label">
                        <p>3</p>
                    </div>
                    <h3 className="get-started-h3">Try it out</h3>
                    <p className="get-started-p">
                        Run a project, coordinate with your team, or just talk it out. Dispatch is a blank canvas for teamwork.
                    </p>
                </div>
            </div>
        </div>
    )

    const finalSection = currentUser ? (
        <div className="splash-page-final-section">
            <div className="splash-page-final-section-content">
                <h3 className="splash-page-final-section-h3">Welcome to where the future works</h3>
                <div className="splash-page-final-section-buttons">
                    <Link to="/user-dashboard/browse-channels" className="splash-page-final-section-button try-demo-final">Launch Dispatch</Link>
                    <button onClick={logout} className="splash-page-final-section-button signup-final">Sign Out</button>
                </div>
            </div>
        </div>
    ) : (
        <div className="splash-page-final-section">
            <div className="splash-page-final-section-content">
                <h3 className="splash-page-final-section-h3">Welcome to where the future works</h3>
                <div className="splash-page-final-section-buttons">
                    <button onClick={demoClicked} className="splash-page-final-section-button try-demo-final">Try a Demo</button>
                    <Link to="/signup" className="splash-page-final-section-button signup-final">Sign Up Here</Link>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {getStartedSection}
            {finalSection}
        </div>
    )
}

export default GetStartedSplashPageSection;