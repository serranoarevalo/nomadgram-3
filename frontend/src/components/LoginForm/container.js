import React, { Component } from "react";
import PropTypes from "prop-types";
import LoginForm from "./presenter";

class Container extends Component{
    state = {
        username: "",
        password: ""
    };
    static propTypes = {
        facebookLogin: PropTypes.func.isRequired
    };

    render(){
        const { username, password } = this.state;
        return <LoginForm 
                    handleInputChange={this._handleInputChange} 
                    handleSubmit={this._handleSubmit}
                    handleFacebookLogin={this._handleFacebookLogin}
                    usernameValue={username} 
                    passwordValue={password} 
                    />
    }
    _handleInputChange = event => {
        const { target: {value, name}} = event;
        this.setState({
            [name]: value
        })
    }
    _handleSubmit = event => {
        event.preventDefault();
        // redux will be here
    }
    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    }
}

export default Container;