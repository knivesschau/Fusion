import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PickBase.css';

export default class PickBase extends Component {
    render() {
        return (
            <>
            <section className="Pick_Starter">

                <div className="Starter_Recipes">
                    <h3>Select Cuisine Style</h3>
                    <label htmlFor="starting_recipe">
                        <select name="cuisine" id="culinary-styles">
                            <option value="">--Select One--</option>
                            <option value="American">American</option>
                            <option value="Mexican">Mexican</option>
                        </select>
                    </label>

                    <div className="American_Recipes">
                        <h3>Starter Recipes for American Cuisine:</h3>
                        <Link to="/fuse"><h4>Grilled Cheese</h4></Link>
                        <Link to="/fuse"><h4>Beef Chili</h4></Link>
                    </div>

                    <div className="Mexican_Recipes">
                        <h3>Starter Recipes for Mexican Cuisine:</h3>
                        <Link to="/fuse"><h4>Carne Asada Tacos</h4></Link>
                        <Link to="/fuse"><h4>Pork Tamales</h4></Link>
                    </div> 

                </div>

            </section>  
            </>
        );
    }
}