import React from "react";

export default class ChannelShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fecthChannelInfo(this.props.match.params.channelId);
    }

    render() {
        return (
            <div className="user-dashboard-center-main">
                <div className="user-dashboard-center-main-feed">
                </div>
            </div> 
        )
    }
}