import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeInfo.css';

export default function RecipeInfo(props) {
    return (
        <section className="Recipe_Info">
            
            <div className="Recipe_1_Sample">
                <Link id="Recipe_MiniInfo" to="/view-recipe">
                    <h2>{props.recipes[0].name}</h2>
                </Link>
                
                <h3>Recipe created on {props.recipes[0].date_modified}</h3>
                <h3>{props.recipes[0].cuisine}</h3>
            </div>

            <div className="Recipe_2_Sample">
                <Link id="Recipe_2_Sample" to="/view-recipe">
                    <h2>{props.recipes[1].name}</h2>
                </Link>

                <h3>Recipe created on {props.recipes[1].date_modified}</h3>
                <h3>{props.recipes[1].cuisine}</h3> 
            </div>

        </section>
    );
}