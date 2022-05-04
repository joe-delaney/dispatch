import React from "react";
import AllDMsItemContainer from "./all_dms_item_container";

export default class AllDMs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
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
                            {this.props.groups.map((group, idx) => (
                                <AllDMsItemContainer group={group} key={idx}/>
                            ))}
                        </ul>
                    </div>
                    <div className="all-dms-search-bar">
                        <span className="all-dms-search-bar-label">To: </span>
                        <input className="all-dms-search-bar-input" 
                                type="text" onChange={this.handleInput("query")} 
                                value={this.state.query} 
                                placeholder="@somebody" />
                    </div>
                </div>
            </div>
        )
    }
}