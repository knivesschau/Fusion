import React, { Component } from 'react';
import AddIngredients from '../AddIngredients/AddIngredients';
import AddSteps from '../AddSteps/AddSteps';
import fusionContext from '../../fusionContext';
import ErrorValidation from '../../ErrorHandlers/ErrorValidation';
import './RecipeEditor.css';

export default class RecipeEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe_name: {
                value: '',
            },
            ingredient_changes: {
                value: '',
            },
            step_changes: {
                value: '',
            },
            changeName: false,
            ingredientChanges: false,
            stepChanges: false,
            validChanges: false, 
            errorType: {}
        };
    };

    static contextType = fusionContext;

    // validate entire recipe form as user changes it to their liking. throw error if any of the checks are false. 
    validateRecipeForm() {
        const {changeName, ingredientChanges, stepChanges} = this.state; 

        this.setState({
            validChanges: changeName && ingredientChanges && stepChanges
        });
    };

    // capture recipe name changes
    updateRecipeName(recipe_name) {
        this.setState({
            recipe_name: {
                value: recipe_name,
            }
        },
            this.validateRecipeName
        );
    };

    // capture ingredient changes 
    updateIngredients(ingredients) {
        this.setState({
            ingredient_changes: {
                value: ingredients
            }
        },
            this.validateIngredients
        );
    };

    // capture step changes 
    updateSteps(steps) {
        this.setState({
            step_changes: {
                value: steps
            }
        },
            this.validateSteps
        );
    };

    // validate changes to the recipe name
    validateRecipeName() {
        let recipeName = this.state.recipe_name.value.trim();
        let changeName = true; 
        let errorType = {...this.state.errorType};

        if (recipeName.length === 0) {
            changeName = false;
            errorType.recipe_name = "Please edit the original recipe name, or type in another name.";
        }

        else if (recipeName.length >= 1) {
            errorType.recipe_name = null;
        }

        this.setState({
            changeName,
            errorType
        },
            this.validateRecipeForm
        );
    };

    // validate changes to the ingredients
    validateIngredients() {
        let ingredient = this.state.ingredient_changes.value.trim();
        let ingredientChanges = true; 
        let errorType = {...this.state.errorType};

        if (ingredient.length === 0) {
            ingredientChanges = false; 
            errorType.ingredient_changes = "Missing ingredient detected: please ensure all ingredients are filled or modified before submitting.";
        }

        else if (ingredient.length >= 1) {
            errorType.ingredient_changes = null;
        }

        this.setState({
            ingredientChanges,
            errorType
        },
            this.validateRecipeForm
        );
    };

    // validate changes to the steps
    validateSteps() {
        let step = this.state.step_changes.value.trim(); 
        let stepChanges = true;
        let errorType = {...this.state.errorType};

        if (step.length === 0) {
            stepChanges = false; 
            errorType.step_changes = "Missing step detected: please ensure all steps are filled or modified before submitting.";
        }

        else if (step.length >= 1) {
            errorType.step_changes = null;
        }

        this.setState({
            stepChanges,
            errorType
        },
            this.validateRecipeForm
        );
    };

    render() {

        const {base_name, cuisine_name, cuisine_id, ingredients, steps} = this.props;

        // convert starting ingredients into editable format 
        const convertIngredients = Object.values({ingredients}).toString();
        let starter_ingredients = convertIngredients.split('\n');
        starter_ingredients = starter_ingredients.map(ingredient => ingredient.trim());
        
        // convert starting steps into editable format
        const convertSteps = Object.values({steps}).toString();
        let starter_steps = convertSteps.split('\n');
        starter_steps = starter_steps.map(step => step.trim());

        //get static cuisine data 
        const {cuisines=[]} = this.context;


        return (
            <>
            <section className="Recipe_Editor"> 
                <h1 id="fuse-info">Fusing: {base_name}</h1>

                <div className="Title_Editor">
                    <h2 id="title-instructor">Enter a New Recipe Title:</h2>
                    <input 
                        id="name-changer" 
                        name="fuse_name" 
                        defaultValue={base_name}
                        onChange={e => this.updateRecipeName(e.target.value)}/>
                    
                    <ErrorValidation
                        value={this.state.validName}
                        message={this.state.errorType.recipe_name}/>
                </div>
                
                <div className="Fuse_Cuisine">
                    <p id="cuisine-info">Your starting culinary style is: {cuisine_name} </p>
                    <input type="hidden" name="base_cuisine" defaultValue={cuisine_id}/>

                    <label htmlFor="cuisines" name="fuse_cuisine">
                        Select your "Fusion" style (or, select "None"): 
                    </label>

                    <select 
                        required 
                        name="fuse_cuisine"
                        id="fusion_cuisine">

                        <option value="">--Select One--</option>

                        {cuisines.map((cuisine, i) => {
                            return (
                                <option 
                                    key={i + 1} 
                                    value={i + 1}>

                                    {cuisine.cuisine_name}

                                </option>
                            );
                        })}

                    </select>

                </div>

                <div className="Edit_Ingredients">
                    <h2 id="ingredient-title">Ingredients</h2>

                    <p id="ingredient-instructor">Change or modify the recipe's ingredients:</p>

                    <ul id="edit-list-ingredients">
                        {starter_ingredients.map((ingredient, i) => {                            
                            return (
                                <li key={i}>
                                <input 
                                    key={i}
                                    type="text" 
                                    id="fuse_ingredients"
                                    name="fuse_ingredients"
                                    defaultValue={ingredient}
                                    onChange={e => this.updateIngredients(e.currentTarget.value)}/>
                                </li>
                            );
                        })}

                        <AddIngredients/>
                    </ul>
                    
                    <ErrorValidation
                            value={this.state.validIngredients}
                            message={this.state.errorType.ingredient_changes}/>

                </div>

                <div className="Edit_Steps">
                    <h2 id="step-title">Steps</h2>

                    <p id="step-instructor">Change or modify the recipe's steps:</p>

                    <ol id="edit-list-steps">
                        {starter_steps.map((step, i) => {
                            return (
                                <li key={i}>
                                    <textarea 
                                        key={i}
                                        id="fuse_steps"
                                        name="fuse_steps"
                                        rows="10"
                                        defaultValue={step}
                                        onChange={e => this.updateSteps(e.currentTarget.value)}/>
                                </li>
                            );
                        })}

                        <AddSteps/>
                    </ol>

                    <ErrorValidation
                        value={this.state.validSteps}
                        message={this.state.errorType.step_changes}/>

                </div>

            </section>
            </>
        );
    };
};