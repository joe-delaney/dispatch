import React from "react";
import AllDMsItemContainer from "./all_dms_item_container";
import AllDMsUserSearchResult from "./all_dms_user_search_result";

export default class AllDMs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.clearSearchBar = this.clearSearchBar.bind(this);
    }

    handleInput(e) {
        this.setState({
            query: e.target.value
        })
        if (e.target.value !== "") {
            this.props.searchUsers(e.target.value);
        } else {
            this.props.clearUserSearchResults();
        }
    }

    clearSearchBar(e) {
        this.setState({
            query: ""
        });
        this.props.clearUserSearchResults();
    }

    render() {
        const searchResults = (this.props.userSearchResults.length || !this.state.query.length) ? this.props.userSearchResults : [{ displayName: "No results found" }];

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
                        <div className="all-dms-search-bar-top">
                        <span className="all-dms-search-bar-label">To: </span>
                        <input className="all-dms-search-bar-input" 
                                type="text" 
                                onChange={this.handleInput} 
                                value={this.state.query} 
                                placeholder="@somebody" />
                        </div>
                        <ul className="search-results">
                            {searchResults.map((user) => (
                                <AllDMsUserSearchResult
                                    user={user}
                                    clearSearchBar={this.clearSearchBar}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}