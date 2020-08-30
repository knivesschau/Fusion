import React, { Component } from 'react';
import fusionContext from '../../fusionContext';
import ErrorValidation from '../../ErrorHandlers/ErrorValidation';
import './ModifyViewer.css';

export default class ModifyViewer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe_name: '',
            ingredient_edits: '',
            steps_edits: '',
            nameEdit: false,
            ingredientsEdit: false,
            stepsEdit: false,
            validEdits: false, 
            errorType: {}
        };
    };

    static contextType = fusionContext; 

    // validate entire modification form for recipe. throw error if any of the checks are false. 
    validateModificationForm() {
        const {nameEdit, ingredientsEdit, stepsEdit} = this.state; 

        this.setState({
            validEdits: nameEdit && ingredientsEdit && stepsEdit
        });
    };

    // capture recipe name changes
    editRecipeName(recipe_name) {
        this.setState({
            recipe_name: recipe_name
        },
            this.validateRecipeName
        );
    };

    // capture ingredient changes 
    editIngredients(ingredients) {
        this.setState({
            ingredient_edits: ingredients
        },
            this.validateIngredients
        );
    };

    // capture step changes 
    editSteps(steps) {
        this.setState({
            step_edits: steps
        },
            this.validateSteps
        );

        console.log(this.state.step_edits)
    };

    // validate changes to the recipe name.
    validateRecipeName() {
        const {recipe_name} = this.state; 
        let nameEdit = true; 
        let errorType = {...this.state.errorType};

        if (recipe_name.length === 0) {
            nameEdit = false; 
            errorType.recipe_name = "Please edit the original recipe name, or type in another response.";
        }

        this.setState({
            nameEdit,
            errorType
        },
            this.validateModificationForm
        );
    };

    // validate changes to the ingredients.
    validateIngredients() {
        const {ingredient_edits} = this.state; 
        let ingredientsEdit = true; 
        let errorType = {...this.state.errorType};

        if (ingredient_edits.length === 0) {
            ingredientsEdit = false; 
            errorType.ingredient_edits = "Missing ingredient detected: please enter an ingredient or modify an existing one";
        }

        this.setState({
            ingredientsEdit,
            errorType
        },
            this.validateModificationForm
        );
    };

    // validate changes to the ingredients.
    validateSteps() {
        const {step_edits} = this.state; 
        let stepsEdit = true;
        let errorType = {...this.state.errorType};

        if (step_edits.length === 0) {
            stepsEdit = false; 
            errorType.step_edits = "Missing step detected: please enter in a step, or modify an existing one before submitting.";
        }

        this.setState({
            stepsEdit,
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