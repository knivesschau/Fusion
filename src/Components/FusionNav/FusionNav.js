import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import cookingpot from '../../images/cooking-pot.png';
import TokenService from '../../services/token-services';
import './FusionNav.css';

export default class FusionNav extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        window.location='/';
    };

    // generate navigation for users logged in 
    renderUserView() {
        return (
            <div className="User_Nav">
                <Link id="link-home" to="/">
                    Home
                </Link>

                <Link id="link-cookbook" to="/your-cookbook">
                    Cookbook
                </Link>

                <Link id="link-fusion" to="/starter-recipes">
                    Fuse
                </Link>
                
                <Link id="link-logout" to="/" onClick={this.handleLogoutClick}>
                    Logout
                </Link>
            </div>
        );
    };

    // generate navigation for guests/non-registered users
    renderGuestView() {
        return (
            <div className="Guest_Nav">
                <Link id="link-home" to="/">
                    About
                </Link>
                
                <Link id="link-register" to="/get-started">
                    Register
                </Link>
                
                <Link id="link-login" to="/login">
                    Log In
                </Link>
            </div>
        );
    }
    
    render() {
        return (
            <>
            {TokenService.hasAuthToken()
                ? this.renderUserView()
                : this.renderGuestView()}
            </>
        );
    };
};
