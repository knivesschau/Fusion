import React, { Component } from 'react';
import fusionContext from '../../fusionContext';
import AddModIngredients from '../AddModIngredients/AddModIngredients';
import AddModSteps from '../AddModSteps/AddModSteps';
import ErrorValidation from '../../ErrorHandlers/ErrorValidation';
import './ModifyViewer.css';

export default class ModifyViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe_name: {
                value: '',
            },
            ingredient_edits: {
                value: '',
            },
            steps_edits: {
                value: '',
            },
            nameEdited: false,
            ingredientsEdited: false,
            stepsEdited: false,
            validEdits: false, 
            errorType: {}
        };
    };

    static contextType = fusionContext; 

    // validate entire modification form for recipe. throw error if any of the checks are false
    validateModificationForm() {
        const {nameEdited, ingredientsEdited, stepsEdited} = this.state; 

        this.setState({
            validEdits: nameEdited && ingredientsEdited && stepsEdited
        });
    };

    // capture recipe name changes
    editRecipeName(recipe_name) {
        this.setState({
            recipe_name: {
                value: recipe_name,
            }
        },
            this.validateRecipeName
        );
    };

    // capture ingredient changes 
    editIngredients(ingredients) {
        this.setState({
            ingredient_edits: {
                value: ingredients
            }
        },
            this.validateIngredients
        );
    };

    // capture step changes 
    editSteps(steps) {
        this.setState({
            step_edits: {
                value: steps
            }
        },
            this.validateSteps
        );
    };

    // validate changes to the recipe name
    validateRecipeName() {
        let recipeName = this.state.recipe_name.value.trim();
        let nameEdited = true; 
        let errorType = {...this.state.errorType};

        if (recipeName.length === 0) {
            nameEdited = false;
            errorType.recipe_name = "Please edit the original recipe name, or type in another name.";
        }

        else if (recipeName.length >= 1) {
            errorType.recipe_name = null;
        }

        this.setState({
            nameEdited,
            errorType
        },
            this.validateModificationForm
        );
    };

    // validate changes to the ingredients
    validateIngredients() {
        let ingredient = this.state.ingredient_edits.value.trim();
        let ingredientsEdited = true; 
        let errorType = {...this.state.errorType};

        if (ingredient.length === 0) {
            ingredientsEdited = false; 
            errorType.ingredient_edits = "Missing ingredient detected: please ensure all ingredients are filled or modified before submitting.";
        }

        else if (ingredient.length >= 1) {
            errorType.ingredient_edits = null;
        }

        this.setState({
            ingredientsEdited,
            errorType
        },
            this.validateModificationForm
        );
    };

    // validate changes to the steps
    validateSteps() {
        let step = this.state.step_edits.value.trim(); 
        let stepsEdited = true;
        let errorType = {...this.state.errorType};

        if (step.length === 0) {
            stepsEdited = false; 
            errorType.step_edits = "Missing step detected: please ensure all steps are filled or modified before submitting.";
        }

        else if (step.length >= 1) {
            errorType.step_edits = null;
        }

        this.setState({
            stepsEdited,
            errorType
        },
            this.validateModificationForm
        );
    };

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
                    <input 
                        id="fuse_name_mod" 
                        name="fuse_name_mod" 
                        defaultValue={fused_name}
                        onChange={e => this.editRecipeName(e.target.value)}/>

                    <ErrorValidation
                        value={this.state.validName}
                        message={this.state.errorType.recipe_name}/>
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
                                    defaultValue={ingredient}
                                    onChange={e => this.editIngredients(e.currentTarget.value)}/>
                                </li>
                            );
                        })}

                        <AddModIngredients/>
                    </ul>

                    <ErrorValidation
                        value={this.state.validIngredients}
                        message={this.state.errorType.ingredient_edits}/>

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
                                        defaultValue={step}
                                        onChange={e => this.editSteps(e.currentTarget.value)}/>
                                </li>
                            );
                        })}

                        <AddModSteps/>
                    </ol>

                    <ErrorValidation
                        value={this.state.validSteps}
                        message={this.state.errorType.step_edits}/>

                </div>

            </section>
            </>
        );
    };
};