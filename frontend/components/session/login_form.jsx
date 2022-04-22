import React from "react";
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: ""};

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => (
            this.setState({
                [type]: e.target.value
            })
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() =>
        this.props.history.push('/'),
        (errors) => this.props.receiveErrors(errors.responseJSON));
    }

    render() {
        const errors = this.props.errors;

        return (
            <div className="form-container">
            <header className="form-header">
                <div className="form-header-section-left"></div>
                <div className="form-header-section-center">
                    <Link to="/">
                        <img src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-btwjnu/Slack_RGB.png?auto=webp&format=png" className="form-logo" />
                    </Link>
                </div>
                <div className="form-header-section-right">
                    <div className="form-sidebar-heading">
                    New to Slack?
                    <br />
                    <Link to="/signup" className="form-header-link">Create an account</Link>
                    </div>
                </div>
            </header>
            <section className="form-main-section">
                <h1 className="form-h1">Sign in to Slack</h1>
                <div className="form-subheading">
                    We suggest using the  
                        <strong> email address you use at work.</strong>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input className="form-input" type="text" value={this.state.email} placeholder="name@work-email.com" onChange={this.handleInput("email")} />
                    </div>
                    <div>
                        <input className="form-input" type="password" value={this.state.password} placeholder="password" onChange={this.handleInput("password")} />
                    </div>
                    <input type="submit" value="Sign In with Email" className="form-button" />
                </form>
            </section>
            {errors.map(error => <p>{error}</p>)}
            </div>
        )
    }
}