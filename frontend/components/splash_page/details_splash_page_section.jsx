import React from "react";
import splashPageDetails1 from "./../../../app/assets/images/splash-page-details/splash-page-details1.jpg"
import splashPageDetails2 from "./../../../app/assets/images/splash-page-details/splash-page-details2.gif"
import splashPageDetails3 from "./../../../app/assets/images/splash-page-details/splash-page-details3.gif"
import splashPageDetails4 from "./../../../app/assets/images/splash-page-details/splash-page-details4.gif"

const DetailsSplashPageSection = () => {

    return (
        <div className="splash-page-details-container">
            <div className="splash-page-details-section logged-out">
                <div className="splash-page-details-section-left">
                    <img className="splash-page-details-image-1" src={splashPageDetails1} alt="Build a better tomorrow" />
                </div>
                <div className="splash-page-details-section-right">
                    <h2 className="splash-page-details-h2">Now is your moment to build a better tomorrow</h2>
                    <p className="splash-page-details-p">We've seen what the future can be. Now it's time to decide what it will be</p>
                </div>
            </div>
            <div className="splash-page-details-section">
                <div className="splash-page-details-section-left">
                    <h2 className="splash-page-details-h2">Move faster by organizing your work life</h2>
                    <p className="splash-page-details-p">The key to productivity in Slack is organized spaces called channels—a different one for everything you’re working on. With all the people, messages and files related to a topic in one place, you can move a whole lot faster.</p>
                </div>
                <div className="splash-page-details-section-right">
                    <img src={splashPageDetails2} alt="channels" />
                </div>
            </div>
            <div className="splash-page-details-section">
                <div className="splash-page-details-section-left">
                    <img src={splashPageDetails3} alt="files" /> 
                </div>
                <div className="splash-page-details-section-right">
                    <h2 className="splash-page-details-h2">Focus your time, on your own terms</h2>
                    <p className="splash-page-details-p">Give yourself the flexibility to work when, where and how you work best. Take control of notifications, collaborate live or on your own time, and find answers in conversations from across your company.</p>
                </div>
            </div>
            <div className="splash-page-details-section">
                <div className="splash-page-details-section-left">
                    <h2 className="splash-page-details-h2">Simplify teamwork for everyone</h2>
                    <p className="splash-page-details-p">Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</p>
                </div>
                <div className="splash-page-details-section-right">
                    <img src={splashPageDetails4} alt="channels" />
                </div>
            </div>
        </div>
    )
}

export  default DetailsSplashPageSection;