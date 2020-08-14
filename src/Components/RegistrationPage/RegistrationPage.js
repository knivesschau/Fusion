import React, {Component} from 'react';
import './RegistrationPage.css';

export default class RegistrationPage extends Component {
    render() {
        return (
            <section className="Registration_Page">

                <h3>Let's Get Cooking! (Will Be Included in Final Version)</h3>

                <form className="Register_Form">

                    <label htmlFor="username">
                        <p id="new-user">Username:</p>
                        <input type="text" id="reg-user" name="register_username"/>
                    </label>

                    <label htmlFor="password">
                        <p id="new-password">Password:</p>
                        <input type="password" id="reg-password" name="register_password"/>
                    </label>

                    <label htmlFor="confirm-password">
                        <p id="confirm-pass">Re-Type Password:</p>
                        <input type="password" id="confirm-password" name="confirm_pass"/>
                    </label>
                    
                    <button type="submit" id="register-new">Register</button>
                    
                </form>

            </section>
        );
    }
}