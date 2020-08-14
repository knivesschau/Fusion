import React, { Component } from 'react';
import RecipeInfo from '../RecipeInfo/RecipeInfo';
import fusedRecipes from '../../fused_recipe_store';
import './ViewCookbook.css';

export default class ViewCookbook extends Component {
    render() {
        return (
            <section className="Your_Cookbook">
                
                <h1 id="cookbook-home">Your Cookbook</h1>

                <RecipeInfo recipes={fusedRecipes.fusedRecipes}/>

            </section>
        );
    }
}