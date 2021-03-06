import React, { Component } from 'react';
import config from '../../config';
import fusionContext from '../../fusionContext';
import RecipeEditor from '../RecipeEditor/RecipeEditor';
import TokenService from '../../services/token-services';
import './FuseRecipe.css';

export default class FuseRecipe extends Component {
    static defaultProps = {
        match: {
            params: {}
        },
        history: {
            push: () => {}
        },
    };

    handleCancelClick = () => {
        window.location='/starter-recipes'
    };

    static contextType = fusionContext;

    // handle POST requests of user-fused recipes 
    handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = {
            date_created: new Date(),
            fused_name: e.target["fuse_name"].value,
            base_cuisine: e.target["base_cuisine"].value,
            fuse_cuisine: e.target["fuse_cuisine"].value,
            fuse_ingredients: Array.from(e.target["fuse_ingredients"]).map(steps => steps.value).join("\n"),
            fuse_steps: Array.from(e.target["fuse_steps"]).map(ingredients => ingredients.value).join("\n")
        };

        fetch(`${config.API_ENDPOINT}/recipes`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newRecipe)
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e));
                }
                return res.json();
            })
            .then(recipe => {
                this.context.addFusion(recipe);
                window.location =`/view-recipe/${recipe.fused_id}`;
            })
            .catch(error => {
                console.error({error});
            });
    };

    render() {
        const {bases=[]} = this.context;
        const {recipe_id} = this.props.match.params;
        const baseRecipe = bases.find(base => base.recipe_id === parseInt(recipe_id)) || {};

        return (
            <section className="Fuse_Recipe">

                <form className="Fusion_Form" onSubmit={this.handleSubmit}>
                {/* pass all starter recipe data to RecipeEditor Component via props */}
                    <RecipeEditor
                        recipe_id={baseRecipe.recipe_id}
                        base_name={baseRecipe.base_name}
                        ingredients={baseRecipe.ingredients}
                        steps={baseRecipe.steps}
                        cuisine_name={baseRecipe.cuisine_name}
                        cuisine_id={baseRecipe.cuisine_id}/>

                    <button type="submit" id="submit-recipe">Save Recipe</button>
                    <button type="reset" onClick={this.handleCancelClick} id="start-over">Cancel</button>
                </form>

            </section>
        );
    };
};