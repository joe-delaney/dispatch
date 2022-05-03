import React from "react";

export default class AllDMsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const groupName = this.props.group ? this.props.group.name : "";
        return (
            <li>{groupName}</li>
        )
    }
}