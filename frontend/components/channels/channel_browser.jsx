import React from "react";

export default class ChannelBrowser extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchChannels();
    }

    render()  {
        return (
            <ul>
                {this.props.channels.map((channel) => (
                    <li>{channel.name}</li>
                ))}
            </ul>
        )
    }
}