import React from "react";
import { Link } from "react-router-dom";

export default class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "", title:"", displayName:""};

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
        let sidebarHeading = (this.props.formType === "login" ? "New to Slack?" 
            : "Alreadyy have an account?");
        let formHeaderLinkTo = this.props.formType === "login" ? "signup" : "login";
        let formHeaderLinkLabel = (this.props.formType === "login" ? 
            "Create an account" : "Sign in");
        let formH1 = (this.props.formType === "login" ? "Sign in to Slack" 
            : "Sign up for Slack");
        let submitLabel = (this.props.formType === "login" ? 
            "Sign in with Email" : "Sign up with Email");
        let signUpInputs = (this.props.formType === "login" ? <div></div> : 
        <div>
            <div>
                <input 
                    className="form-input" 
                    type="text" 
                    value={this.state.displayName} 
                    placeholder="display name" 
                    onChange={this.handleInput("displayName")} 
                />
            </div>
            <div>
                <input 
                    className="form-input" 
                    type="text" 
                    value={this.state.title} 
                    placeholder="title (optional)" 
                    onChange={this.handleInput("title")} 
                />
            </div>
        </div>);  

        return (
            <div className="form-container">
            <header className="form-header">
                <div className="form-header-section-left"></div>
                <div className="form-header-section-center">
                    <Link to="/">
                        <img 
                        src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-btwjnu/Slack_RGB.png?auto=webp&format=png" 
                        className="form-logo" 
                        />
                    </Link>
                </div>
                <div className="form-header-section-right">
                    <div className="form-sidebar-heading">
                    {sidebarHeading}
                    <br />
                    <Link 
                        to={`/${formHeaderLinkTo}`} 
                        className="form-header-link">{formHeaderLinkLabel}
                    </Link>
                    </div>
                </div>
            </header>
            <section className="form-main-section">
                <h1 className="form-h1">{formH1}</h1>
                <div className="form-subheading">
                    We suggest using the  
                        <strong> email address you use at work.</strong>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                            className="form-input" 
                            type="text" value={this.state.email} 
                            placeholder="name@work-email.com" 
                            onChange={this.handleInput("email")} 
                        />
                    </div>
                    <div>
                        <input 
                            className="form-input" 
                            type="password" 
                            value={this.state.password} 
                            placeholder="password" 
                            onChange={this.handleInput("password")} 
                        />
                    </div>
                    {signUpInputs}
                    <input 
                        type="submit" 
                        value={submitLabel} 
                        className="form-button" 
                    />
                </form>
            </section>
            {errors.map(error => <p>{error}</p>)}
            </div>
        )
    }
}