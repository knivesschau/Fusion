import React, { Component } from 'react';
import AddIngredients from '../AddIngredients/AddIngredients';
import AddSteps from '../AddSteps/AddSteps';
import fusionContext from '../../fusionContext';
import ErrorValidation from '../../ErrorHandlers/ErrorValidation';
import floursack from '../../images/flour-sack.png';
import fryingpan from '../../images/frying-pan.png';
import ovenmitt from '../../images/oven-mitt.png';
import cookbook from '../../images/cookbook.png';
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
            changedName: false,
            ingredientChanged: false,
            stepChanged: false,
            validChanges: false, 
            errorType: {}
        };
    };

    static contextType = fusionContext;

    // validate entire recipe form as user changes it to their liking, throw error if any of the checks are false
    validateRecipeForm() {
        const {changedName, ingredientChanged, stepChanged} = this.state; 

        this.setState({
            validChanges: changedName && ingredientChanged && stepChanged
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
        let changedName = true; 
        let errorType = {...this.state.errorType};

        if (recipeName.length === 0) {
            changedName = false;
            errorType.recipe_name = "Please edit the original recipe name, or type in another name.";
        }

        else if (recipeName.length >= 1) {
            errorType.recipe_name = null;
        }

        this.setState({
            changedName,
            errorType
        },
            this.validateRecipeForm
        );
    };

    // validate changes to the ingredients
    validateIngredients() {
        let ingredient = this.state.ingredient_changes.value.trim();
        let ingredientChanged = true; 
        let errorType = {...this.state.errorType};

        if (ingredient.length === 0) {
            ingredientChanged = false; 
            errorType.ingredient_changes = "Missing ingredient detected: please ensure all ingredients are filled or modified before submitting.";
        }

        else if (ingredient.length >= 1) {
            errorType.ingredient_changes = null;
        }

        this.setState({
            ingredientChanged,
            errorType
        },
            this.validateRecipeForm
        );
    };

    // validate changes to the steps
    validateSteps() {
        let step = this.state.step_changes.value.trim(); 
        let stepChanged = true;
        let errorType = {...this.state.errorType};

        if (step.length === 0) {
            stepChanged = false; 
            errorType.step_changes = "Missing step detected: please ensure all steps are filled or modified before submitting.";
        }

        else if (step.length >= 1) {
            errorType.step_changes = null;
        }

        this.setState({
            stepChanged,
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
                    <img src={ovenmitt} id="mitt-fuse-icon" alt="oven mitt"/>

                    <h2 id="title-instructor">Enter a New Recipe Title:</h2>
                    
                    <label htmlFor="name-changer-input">
                        <input 
                            type="text"
                            id="name-changer" 
                            name="fuse_name" 
                            defaultValue={base_name}
                            onChange={e => this.updateRecipeName(e.target.value)}/>
                    </label>
                    
                    <ErrorValidation
                        message={this.state.errorType.recipe_name}/>
                </div>
                
                <div className="Fuse_Cuisine">
                    <img src={cookbook} id="cookbook-fuse-icon" alt="cookbook"/>

                    <h2 id="cuisine-info">Your starting culinary style is: {cuisine_name}</h2>
                    <input type="hidden" name="base_cuisine" defaultValue={cuisine_id}/>

                    <label htmlFor="cuisines" name="fuse_cuisine">
                        <p id="select-cuisine"> Select your "Fusion" style (or, select "None"): </p>

                        <select 
                            required 
                            name="fuse_cuisine"
                            id="fusion-cuisine">

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
                    </label>

                </div>

                <div className="Edit_Ingredients">
                    <img src={floursack} id="flour-fuse-icon" alt="flour sack"/>

                    <h2 id="ingredient-title">Ingredients</h2>

                    <p id="ingredient-instructor">Change or modify the recipe's ingredients:</p>

                    <ul id="edit-list-ingredients">
                        {starter_ingredients.map((ingredient, i) => {                           
                            return (
                                <li key={i}>
                                
                                <label htmlFor="fuse-ingredients-inputs">
                                    <input 
                                        className="Fuse_Ingredients"
                                        key={i}
                                        type="text" 
                                        id="fuse-ingredients"
                                        name="fuse_ingredients"
                                        defaultValue={ingredient}
                                        onChange={e => this.updateIngredients(e.currentTarget.value)}/>
                                </label>

                                </li>
                            );
                        })}

                        <AddIngredients/>
                    </ul>
                    
                    <ErrorValidation
                        message={this.state.errorType.ingredient_changes}/>

                </div>

                <div className="Edit_Steps">
                    <img src={fryingpan} id="pan-fuse-icon" alt="frying pan"/>

                    <h2 id="step-title">Steps</h2>

                    <p id="step-instructor">Change or modify the recipe's steps:</p>

                    <ol id="edit-list-steps">
                        {starter_steps.map((step, i) => {
                            return (
                                <li key={i}>
                                    
                                    <label htmlFor="fuse-steps-inputs">
                                        <textarea 
                                            className="Fuse_Steps"
                                            key={i}
                                            id="fuse-steps"
                                            name="fuse_steps"
                                            rows="10"
                                            defaultValue={step}
                                            onChange={e => this.updateSteps(e.currentTarget.value)}/>
                                    </label>

                                </li>
                            );
                        })}

                        <AddSteps/>
                    </ol>

                    <ErrorValidation
                        message={this.state.errorType.step_changes}/>

                </div>

            </section>
            </>
        );
    };
};