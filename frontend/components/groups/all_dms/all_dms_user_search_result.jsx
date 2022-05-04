import React from "react";

export default class AllDMsUserSearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let displayName = this.props.user ? this.props.user.displayName : "";

        return (
            <li>
                <span>{displayName}</span>
            </li>
        )
    }
}