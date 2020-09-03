import React, { Component } from 'react';
import fusionContext from '../../fusionContext';
import handmixer from '../../images/hand-mixer.png';
import './BaseRecipe.css';

export default class BaseRecipe extends Component {
    static contextType = fusionContext; 

    render() {

        const {base_name, cuisine_name, ingredients, steps} = this.props; 

        // convert recipe ingredient data into presentable format on client
        const convertIngredients = Object.values({ingredients}).toString();
        const convertSteps = Object.values({steps}).toString();

        // convert recipe step data into presentable format on client
        const starter_ingredients = convertIngredients.split('\n');
        const starter_steps = convertSteps.split('\n');

        return (
            <>
            <section className="Base_Recipe">
                
                <div className="Base_RecipeInfo">
                    <img src={handmixer} id="hand-mixer-icon" alt="hand mixer"/>
                    <h2 id="base-title">{base_name}</h2>
                    <h3 id="starting-cuisine">Culinary Style: {cuisine_name}</h3>
                </div>

                <div className="Base_Ingredients">
                        <h4 id="ingredients-title">Ingredients</h4>
                        
                        <ul id="base-ingredients">
                            {starter_ingredients.map((ingredient, i) => {
                                return (
                                    <li id="starting-ingredients" key={i}>{ingredient}</li>
                                );
                            })}
                        </ul>
                    </div>
                
                    <div className="Steps_Section">
                        <h4 id="steps-title">Steps</h4>
                        
                        <ol id="base-steps">
                            {starter_steps.map((step, i) => {
                                return (
                                    <li id="starting-steps" key={i}>{step}</li>
                                );
                            })}
                        </ol>
                    </div>

            </section>
            </>
        );
    };
};