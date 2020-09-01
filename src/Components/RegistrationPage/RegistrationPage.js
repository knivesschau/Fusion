import React, { Component } from 'react';
import ErrorValidation from '../../ErrorHandlers/ErrorValidation';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationPage.css';

export default class RegistrationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            reTypedPass: '',
            validName: false,
            validPass: false,
            validConfirm: false,
            validReg: false,
            errorType: {}
        };
    };
    
    static defaultProps = {
        onValidRegistration: () => {}
    };

    // validate entire registration form, throw error if any checks do not pass 
    validateForm() {
        const {validName, validPass, validConfirm} = this.state; 

        this.setState({
            validReg: validName && validPass && validConfirm
        });
    };

    // capture changes to username 
    updateUsername(username) {
        this.setState({
            username: username,
        },
            this.validateUsername
        );
    };

    // caputure changes to password 
    updatePassword(password) {
        this.setState({
            password: password,
        },
            this.validatePassword
        );
    };

    // capture changes to re-confirmed password 
    confirmedPassword(reTypedPass) {
        this.setState({
            reTypedPass: reTypedPass
        },
            this.validateConfirmedPassword
        );
    };

    // validate username captured in state
    validateUsername() {
        const {username} = this.state; 
        let validName = true; 
        let errorType = {...this.state.errorType};

        if (username.length < 3) {
            validName = false;
            errorType.username = "Please create a username that is longer than 3 characters.";
        }
        else {
            errorType.username = null;
        }

        this.setState({
            validName,
            errorType,
        },
            this.validateForm
        );
    };

    // validate password captured in state
    validatePassword() {
        const {password} = this.state;
        const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/;
        let validPass = true;
        let errorType = {...this.state.errorType};

        if (password.length < 8) {
            validPass = false;
            errorType.password = "Password must be at least 8 characters long.";
        }

        if (password.length > 72) {
            validPass = false;
            errorType.password = "Password must be less than 72 characters long.";
        }

        if (password.startsWith(' ') || password.endsWith(' ')) { 
            validPass = false;
            errorType.password = "Password must not start or end with a space.";
        }

        if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
            validPass = false;
            errorType.password = "Password must contain 1 upper case letter, lower case letter, number, and special character.";
        }
        else {
            errorType.password = null;
        }

        this.setState({
            validPass,
            errorType,
        },
            this.validateForm
        );
    };

    // validate re-confirmed password captured in state
    validateConfirmedPassword() {
        const {reTypedPass} = this.state;
        const {password} = this.state;
        let validConfirm = true;
        let errorType = {...this.state.errorType};

        if (password !== reTypedPass) {
            validConfirm = false;
            errorType.reTypedPass = "Passwords do not match.";
        }
        else {
            errorType.reTypedPass = null; 
        }

        this.setState({
            validConfirm,
            errorType
        },
            this.validateForm
        );
    };

    // handle POST requests for user registration on client 
    submitRegistration = e => {
        e.preventDefault();

        const {username, password} = e.target;

        this.setState({
            successReg: null,
            submitError: null
        });

        AuthApiService.postUser({
            user_name: username.value,
            password: password.value
        })
            .then(user => {
                username.value = '';
                password.value = '';
                this.props.onValidRegistration();
            })
            .then(() => {
                this.setState({
                    successReg: "Successfully registered! Please log in to begin cooking."
                });
            })
            .then(() => {
                window.location='/'
            })
            .catch(res => {
                this.setState({
                    error: res.error
                });
            });
    };

    render() {
        return (
            <section className="Registration_Page">

                <h3>Let's Get Cooking!</h3>

                <form className="Register_Form" onSubmit={this.submitRegistration}>

                    <label htmlFor="username">
                        <p id="new-user">Username:</p>
                        
                        <input 
                            type="text" 
                            id="reg-user" 
                            name="register_username"
                            onChange={e => this.updateUsername(e.target.value)}/>
                    </label>

                    <label htmlFor="password">
                        <p id="new-password">Password:</p>
                        
                        <input 
                            type="password" 
                            id="reg-password" 
                            name="register_password"
                            onChange={e => this.updatePassword(e.target.value)}/>
                    </label>

                    <label htmlFor="confirm-password">
                        <p id="confirm-pass">Re-Type Password:</p>

                        <input 
                            type="password" 
                            id="confirm-password" 
                            name="confirm_pass"
                            onChange={e => this.confirmedPassword(e.target.value)}/>
                    </label>
                    
                    <button type="submit" id="register-new">Register</button>
                    
                </form>
                
                <ErrorValidation 
                    message={this.state.errorType.username}/>
                
                <ErrorValidation 
                    message={this.state.errorType.password}/>
                
                <ErrorValidation 
                    message={this.state.errorType.reTypedPass}/>
                        
            </section>
        );
    }
}