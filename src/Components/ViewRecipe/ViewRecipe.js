import React, { Component } from 'react';
import Recipe from '../Recipe/Recipe';
import fusedRecipes from '../../fused_recipe_store';
import './ViewRecipe.css';

export default class ViewRecipe extends Component {
    render() {
        return (
            <section className="Recipe_Viewer">
                <Recipe recipes={fusedRecipes.fusedRecipes}/>
            </section>
        );
    }
}