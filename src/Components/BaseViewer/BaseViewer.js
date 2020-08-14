import React from 'react';
import { Link } from 'react-router-dom';
import './BaseViewer.css';

export default function BaseViewer(props) {
    return (
        <>
        <section className="Recipe_Fuser"> 

            <h4>Fusing: Grilled Cheese</h4>

            <label htmlFor="select-second-cuisine">
                <h4>Are you fusing your recipe with another cooking style?</h4>
                
                <select name="cuisine" id="culinary-styles">
                    <option value="">---Select One---</option>
                    <option value="No">No</option>
                    <option value="American">American</option>
                    <option value="Mexican">Mexican</option>
                </select>
            </label>

            <div className="Edit_Ingredients">
                <h4><u>Ingredients</u></h4>

                <ul>
                    {props.recipes[2].ingredients.map((ingredients, i) => {
                        return <li key={i} id="recipe-ingredients">{ingredients}<Link id="plus-icon" to="/fuse">+</Link><input id="ingredient-editor" type="text"/></li>
                    })}
                </ul>
            </div>

            <div className="Edit_Steps">
                <h4><u>Steps</u></h4>
                
                <ol>
                    {props.recipes[2].steps.map((step, i) => {
                        return <li key={i} id="recipe-steps">{step}<Link id="plus-icon2" to="/fuse">+</Link><input id="steps-editor"/></li>
                    })}
                </ol>
            </div>

            <button id="save-recipe" type="submit">Save Recipe</button>
            <button id="cancel-fuse" type="button">Cancel</button>

        </section>
        </>
    );
}