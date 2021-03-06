import React, { Component } from 'react';
import fusionContext from '../../fusionContext';
import { Link } from 'react-router-dom';
import config from '../../config';
import cookbook from '../../images/cookbook.png';
import './Recipe.css';
import TokenService from '../../services/token-services';

export default class Recipe extends Component {    
    static defaultProps = {
        onDeleteFusion: () => {}
    };

    static contextType = fusionContext;

    // handle DELETE requests of fused recipes
    handleDelete = e => {
        e.preventDefault();
        const fused_id = this.props.fused_id;

        fetch(`${config.API_ENDPOINT}/recipes/${fused_id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getAuthToken()}`
            },
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e));
                }
                return null;
            })
            .then(() => {
                this.context.deleteFusion(fused_id);
                this.props.onDeleteFusion(fused_id);
            })
            .catch(error => {
                console.error({error})
            });
    };

    // render cuisines that have been fused. if no fusion, leave out "fuse_cuisine" category 
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

        const {fused_id, fused_name, date_modified, fuse_ingredients, fuse_steps} = this.props;
        
        // convert recipe ingredient data into presentable format on client
        const convertIngredients = Object.values({fuse_ingredients}).join();
        const fused_ingredients = convertIngredients.split("\n");
        
        // convert recipe step data into presentable format on client
        const convertSteps = Object.values({fuse_steps}).join();
        const fused_steps = convertSteps.split("\n");

        return (
            <section className="RecipeMain">
                
                <div className="Recipe_Expand">

                    <img src={cookbook} id="cookbook-recipe-icon" alt="cookbook"/>

                    <h2 id="recipe-title">{fused_name}</h2>
                    
                    {this.renderCuisines()}
                    
                    <h4 id="date-changed">Last Modified: {new Date(date_modified).toLocaleDateString()} </h4>

                    <Link to={`/modify-recipe/${fused_id}`}>
                        <button id="modify-recipe" type="button">Modify</button>
                    </Link>

                    <button id="delete-recipe" type="button" onClick={this.handleDelete}>Delete</button>

                    <div className="Ingredients_Section">
                        <h4 id="ingredients-title">Ingredients</h4>
                        
                        <ul id="display-ingredients">
                            {fused_ingredients.map((fuse_ingredients, i) => {
                                return (
                                    <li id="ingredients-list" key={i}>{fuse_ingredients}</li>
                                );
                            })}
                        </ul>
                    </div>
                
                    <div className="Steps_Section">
                        <h4 id="steps-title">Steps</h4>
                        
                        <ol id="display-steps">
                            {fused_steps.map((step, i) => {
                                return (
                                    <li id="steps-list" key={i}>{step}</li>
                                );
                            })}
                        </ol>
                    </div>

                </div>

            </section>
        );
    };
};