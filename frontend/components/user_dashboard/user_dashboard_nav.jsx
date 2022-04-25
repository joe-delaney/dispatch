import React from "react";

class UserDashboardNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            query: e.target.value
        })
        if(e.target.value = "")  {
            this.props.clearSearchResults();
            this.setState({
                query: ""
            })
        } else {
            console.log(this.state.query);
            this.props.searchUsers(this.state.query);
        }
    }

    render() {
        return (
            <nav className="user-dashboard-nav-bar">
                <div className="user-dashboard-nav-bar-left"></div>
                <div className="user-dashboard-nav-bar-center">
                    <input onChange={this.handleInput} className="user-dashboard-nav-bar-search-input" type="text" value={this.state.query} placeholder="&#xF002;  Search Slack"/>
                </div>
                <div className="user-dashboard-nav-bar-right"></div>
            </nav>
        )
    }
}

export default UserDashboardNav;