import React from "react";

export const BlankDashboardCenter = () => (
    <div className="user-dashboard-center-main">
            <div className="user-dashboard-center-main-feed">
            </div>
            <div className="user-dashboard-center-main-message-composer">
                <div className="user-dashboard-message-container">
                    <textarea type="text" className="message-input" placeholder="Write your message here..."/>
                    <button className="send-message-button">Send</button>
                </div>
            </div>
    </div> 
)