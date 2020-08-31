import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-services';
import './FusionNav.css';

export default class FusionNav extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        window.location='/';
    };

    renderUserView() {
        return (
            <div className="User_Nav">
                <Link to="/">
                    Home
                </Link>

                <Link to="/your-cookbook">
                    Cookbook
                </Link>

                <Link to="/starter-recipes">
                    Fuse
                </Link>

                <Link to="/" onClick={this.handleLogoutClick}>
                    Logout
                </Link>
            </div>
        );
    };

    renderGuestView() {
        return (
            <div className="Guest_Nav">
                <Link to="/">
                    About
                </Link>
                
                <Link to="/get-started">
                    Register
                </Link>

                <Link to="/login">
                    Log In
                </Link>
            </div>
        );
    }
    
    render() {
        return (
            <nav role="navigation" className="Fusion_Nav">
                {TokenService.hasAuthToken()
                    ? this.renderUserView()
                    : this.renderGuestView()}
            </nav>
        );
    };
};
