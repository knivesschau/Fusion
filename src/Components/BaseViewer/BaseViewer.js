import React, { Component } from 'react';
import fusionContext from '../../fusionContext';
import BaseRecipe from '../BaseRecipe/BaseRecipe'
import './BaseViewer.css';

export default class BaseView extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    };

    handleCancelClick = () => {
        this.props.history.push(`/starter-recipes`);
    };

    static contextType = fusionContext;

    render() {

        const {bases=[]} = this.context; 
        const {recipe_id} = this.props.match.params; 
        const baseRecipe = bases.find(base => base.recipe_id === parseInt(recipe_id)) || {};

        return (
            <section className="View_Base">
                {/* pass all starter recipe data to BaseRecipe Component via props */}
                <BaseRecipe
                    recipe_id={baseRecipe.recipe_id}
                    base_name={baseRecipe.base_name}
                    cuisine_name={baseRecipe.cuisine_name}
                    ingredients={baseRecipe.ingredients}
                    steps={baseRecipe.steps}
                />
                
            <button type="button" id="choose-recipe" onClick={e => this.props.history.push(`/fuse/${recipe_id}`)}>Fuse Recipe</button>
            <button type="button" id="pick-another" onClick={this.handleCancelClick}>Pick Another Recipe</button>

            </section>
        );
    };
};