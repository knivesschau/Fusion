import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './FusionNav.css';

export default class FusionNav extends Component {
    render() {
        return (
            <div className="Fusion_Nav">
                <Link to="/">
                    Home
                </Link>

                <Link to="/your-cookbook">
                    Cookbook
                </Link>

                <Link to="/starter-recipes">
                    Fuse
                </Link>
            </div>
        );
    }
}
