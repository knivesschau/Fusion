import React, {Component} from 'react';
import TokenService from '../../services/token-services';
import './LoginPage.css';

export default class LoginPage extends Component {
    static defaultProps = {
        onValidLogin: () => {}
    };

    handleLoginAuth = e => {
        e.preventDefault();

        const {return_username, return_password} = e.target;

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(return_username.value, return_password.value)
        );

        return_username.value = '';
        return_password.value = '';
        this.props.onValidLogin();

        window.location="/your-cookbook";
    }
    
    render() {
        return (
            <section className="Login_Page">
                
                <h3>Log In</h3>

                <form className="Login_Form" onSubmit={this.handleLoginAuth}>
                    
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

            </section>
        );
    }
}