import React from "react";

export default class NewMessageView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            selectedUserIds: []
        }
    }

    handleInput(type) {
        return e => {
            this.setState({
                    [type]: e.target.value
                })
        }
    }

    clearSearchBar(e) {
        this.setState({
            query: ""
        });
        this.props.clearUserSearchResults();
    }

    render() {
        return (
            <div className="user-dashboard-center-main">
                <div className="user-dashboard-center-main-feed">
                    <div className="all-dms-container">
                        <ul className="all-dms-items">
                            
                        </ul>
                    </div>
                    <div className="all-dms-search-bar">
                        <span className="all-dms-search-bar-label">To: </span>
                        <input className="all-dms-search-bar-input" 
                            onChange={this.handleInput("query")} 
                            value={this.state.query} 
                            type="text" 
                            placeholder="#channel or @somebody" />
                    </div>
                </div>
            </div>
        )
    }
}