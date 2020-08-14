import React from 'react';
import './Recipe.css';

export default function Recipe(props) {
    return (
        <section className="RecipeMain">
            
            <div className="Sample_Recipe1">
                <h2 id="recipe-title">{props.recipes[0].name}</h2>
                <h3 id="cuisine-styles">Culinary Styles: {props.recipes[0].cuisine}</h3>
                <h4 id="date-changed">Last Modified: {props.recipes[0].date_modified}</h4>

                <button id="modify-recipe" type="button">Modify</button>
                <button id="delete-recipe" type="delete">Delete</button>

                <div className="Ingredients_Section1">
                    <h4 id="ingredients-title"><u>Ingredients</u></h4>
                    
                    <ul>
                        {props.recipes[0].ingredients.map((ingredients, i) => {
                            return <li key={i} id="recipe-ingredients">{ingredients}</li>
                        })}
                    </ul>
                </div>
            
                <div className="Steps_Section1">
                    <h4 id="steps-title"><u>Steps</u></h4>
                    
                    <ol>
                        {props.recipes[0].steps.map((step, i) => {
                            return <li key={i} id="recipe-steps">{step}</li>
                        })}
                    </ol>
                </div>

            </div>

            <div className="Sample_Recipe2">
                <h2 id="recipe-title2">{props.recipes[1].name}</h2>
                <h3 id="cuisine-styles2">Culinary Styles: {props.recipes[1].cuisine}</h3>
                <h4 id="date-changed2">Last Modified: {props.recipes[1].date_modified}</h4>

                <button id="modify-recipe2" type="button">Modify</button>
                <button id="delete-recipe2" type="delete">Delete</button>

                <div className="Ingredients_Section2">
                    <h4 id="ingredients-title2"><u>Ingredients</u></h4>
                    
                    <ul id="ingredients-list">
                        {props.recipes[1].ingredients.map((ingredients, i) => {
                            return <li key={i} id="recipe-ingredients">{ingredients}</li>
                        })}
                    </ul>
                </div>
            
                <div className="Steps_Section2">
                    <h4 id="steps-title2"><u>Steps</u></h4>
                    
                    <ol id="steps-list">
                        {props.recipes[1].steps.map((step, i) => {
                            return <li key={i} id="recipe-steps">{step}</li>
                        })}
                    </ol>
                </div>

            </div>

        </section>
    );
}