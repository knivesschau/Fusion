import React, {Component} from 'react';
import './LoginPage.css';

export default class LoginPage extends Component {
    render() {
        return (
            <section className="Login_Page">
                
                <h3>Log In (Will Be Included in Final Version)</h3>

                <form className="Login_Form">
                    
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