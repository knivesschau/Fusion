import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fusionContext from '../../fusionContext';
import './RecipeEditor.css';

export default class RecipeEditor extends Component {
    
    static contextType = fusionContext;

    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    render() {

        const {base_name, cuisine_name, cuisine_id, ingredients, steps} = this.props;

        // convert ingredients into editable format 
        const convertIngredients = Object.values({ingredients}).toString();
        let starter_ingredients = convertIngredients.split('\n');
        starter_ingredients = starter_ingredients.map(ingredient => ingredient.trim());
        
        // convert steps into editable format
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
                    <h1>Enter A New Recipe Title:</h1>
                    <input name="fuse_name" defaultValue={base_name}/>
                </div>
                
                <div className="Fuse_Cuisine">
                    <p id="cuisine-info">Your starting culinary style is: {cuisine_name} </p>
                    <input type="hidden" name="base_cuisine" defaultValue={cuisine_id}/>

                    <label htmlFor="cuisines" name="fuse_cuisine">
                        Select your second cuisine:
                    </label>

                    <select name="fuse_cuisine">
                        <option key="">--Select One--</option>
                        {cuisines.map((cuisine, i) => {
                            return (
                                <option key={i + 1} value={i + 1}>{cuisine.cuisine_name}</option>
                            );
                        })}
                    </select>

                </div>

                <div className="Edit_Ingredients">
                    <h2>Ingredients</h2>
                    
                    <ul>
                    {starter_ingredients.map((ingredient, i) => {
                        return (
                            <li key={i}>
                            <input 
                                key={i}
                                type="text" 
                                id="edit-ingredients"
                                name="fuse_steps"
                                defaultValue={ingredient}
                                onChange={e => this.handleInput(e)}/>
                            </li>
                        );
                    })}
                    </ul>
                </div>

                <div className="Edit_Steps">
                    <h2>Steps</h2>

                    <ol>
                        {starter_steps.map((step, i) => {
                            return (
                                <li key={i}>
                                    <textarea 
                                        key={i}
                                        name="fuse_ingredients"
                                        id="edit-steps"  
                                        rows="10" 
                                        defaultValue={step}
                                        onChange={e => this.handleInput(e)}/> 
                                </li>
                            );
                        })}
                    </ol>
                </div>

            </section>
            </>
        );
    };
};