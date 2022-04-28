import React from "react";

export default class ChannelShow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.channelId
        }
    }

    componentDidMount() {
        this.props.fecthChannelInfo(this.props.match.params.channelId);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.id !== this.props.match.params.channelId) {
            this.props.fecthChannelInfo(this.props.match.params.channelId);
            this.setState({
                id: this.props.match.params.channelId
            })
        }
    }

    render() {
        return (
            <div className="user-dashboard-center-main">
                <div className="user-dashboard-center-main-feed">
                    <h1>TEST</h1>
                </div>
            </div> 
        )
    }
}