import React from "react";
import { Link } from "react-router-dom";

const SplashPageFooter = () => (
    <div className="splash-page-footer">
        <Link to="/">
            <img
                src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-6gwiyo/Slack_Mark.svg?auto=webp&format=png"
                className="splash-page-footer-logo"
            />
        </Link>
        <ul className="splash-page-footer-links">
            <h3 className="splash-page-footer-h3">Personal Links</h3>
            <a className="splash-page-footer-link" href="#">Portfolio</a>
            <a className="splash-page-footer-link" href="https://www.linkedin.com/in/joseph-delaney-46985b76/">LinkedIn</a>
            <a className="splash-page-footer-link" href="https://github.com/joe-delaney/slack-chat">Github</a>
        </ul>
    </div>
)

export default SplashPageFooter;