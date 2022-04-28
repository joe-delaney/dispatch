import React from "react";

export default class ChannelShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchChannelInfo(this.props.match.params.channelId);
    }

    render() {
        return <h1>TEST</h1>;
    }
}