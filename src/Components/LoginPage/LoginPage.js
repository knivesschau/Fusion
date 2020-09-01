import React, { Component } from 'react';
import TokenService from '../../services/token-services';
import AuthApiService from '../../services/auth-api-service';
import ErrorValidation from '../../ErrorHandlers/ErrorValidation';
import './LoginPage.css';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {error: null};
    };
    
    static defaultProps = {
        onValidLogin: () => {}
    };

    // handle POST request on client for user logins
    handleJwtLoginAuth = e => {
        e.preventDefault();

        const {return_username, return_password} = e.target;

        this.setState({
            error: null
        });

        AuthApiService.postLogin({
            user_name: return_username.value,
            password: return_password.value
        })
            .then(res => {
                return_username.value = '';
                return_password.value = '';
                TokenService.saveAuthToken(res.authToken);
                this.props.onValidLogin();
            })
            .then(() => {
                window.location="/your-cookbook";
            })
            .catch(res => {
                this.setState({
                    error: "Invalid username or password. Please double-check your crendentials and try again."
                });
            });
    };
    
    render() {
        return (
            <section className="Login_Page">
                
                <h3>Log In</h3>

                <form className="Login_Form" onSubmit={this.handleJwtLoginAuth}>
                    
                    <label htmlFor="username">
                        <p id="return-user">Username:</p>
                        <input type="text" id="return-app-user" name="return_username"/>
                    </label>

                    <label htmlFor="password">
                        <p id="return-pass">Password:</p>
                        <input type="password" id="user-password" name="return_password"/>
                    </label>

                    <button type="submit" id="user-login">Login</button>

                </form>

                <ErrorValidation id="login-error" message={this.state.error}/>

            </section>
        );
    }
}