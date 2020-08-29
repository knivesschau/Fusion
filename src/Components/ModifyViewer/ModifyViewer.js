import React, { Component } from 'react';
import fusionContext from '../../fusionContext';
import AddModIngredients from '../AddModIngredients/AddModIngredients';
import AddModSteps from '../AddModSteps/AddModSteps';
import './ModifyViewer.css';

export default class ModifyViewer extends Component {

    static contextType = fusionContext; 

    renderCuisines() {
        const {fuse_cuisine, base_cuisine} = this.props;

        if (fuse_cuisine === null || fuse_cuisine === 'None') {
            return (
                <h3 id="cuisine-styles-single">{base_cuisine}</h3>
            );
        }
        else {
            return (
                <h3 id="cuisine-styles-both">{base_cuisine}, {fuse_cuisine}</h3>
            );
        }
    };

    render() {

        const {fused_name, date_modified, fuse_ingredients, fuse_steps} = this.props;

        // convert fused ingredients into editable format
        const convertFuseIngredients = Object.values({fuse_ingredients}).toString();
        let fused_ingredients = convertFuseIngredients.split('\n');
        fused_ingredients = fused_ingredients.map(ingredient => ingredient.trim());
        
        // convert fused steps into editable format
        const convertFuseSteps = Object.values({fuse_steps}).toString();
        let fused_steps = convertFuseSteps.split('\n');
        fused_steps = fused_steps.map(step => step.trim());

        return (
            <>
            <section className="Recipe_Modifier">

                <h1 id="modify-info">Modifying: {fused_name}</h1>
                <h2 id="date-display">Last Modified: {new Date(date_modified).toLocaleDateString()}</h2>
                
                {this.renderCuisines()}

                <div className="Title_Modifier">
                    <h2 id="title-changer">Change Your Recipe Title:</h2>
                    <input id="fuse_name_mod" name="fuse_name_mod" defaultValue={fused_name}/>
                </div>

                <div className="Ingredient_Modifier">
                    <h2 id="mod-ingredients">Ingredients</h2>

                    <p id="ingredient-instructor">Change or modify the recipe's ingredients:</p>

                    <ul id="mod-ingredients-list">
                        {fused_ingredients.map((ingredient, i) => {
                            return (
                                <li key={i}>
                                <input 
                                    key={i}
                                    type="text" 
                                    id="mod_ingredients"
                                    name="mod_ingredients"
                                    defaultValue={ingredient}/>
                                </li>
                            );
                        })}

                        <AddModIngredients/>
                    </ul>

                </div>

                <div className="Steps_Modifier">
                    <h2 id="mod-steps">Steps</h2>

                    <p id="step-instructor">Change or modify the recipe's steps:</p>

                    <ol id="mod-steps-list">
                        {fused_steps.map((step, i) => {
                            return (
                                <li key={i}>
                                    <textarea 
                                        key={i}
                                        id="mod_steps"
                                        name="mod_steps"
                                        rows="10" 
                                        defaultValue={step}/>
                                </li>
                            );
                        })}

                        <AddModSteps/>
                    </ol>

                </div>

            </section>
            </>
        );
    };
};