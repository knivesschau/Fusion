import React, { Component } from 'react';
import Recipe from '../Recipe/Recipe';
import fusionContext from '../../fusionContext';
import './ViewRecipe.css';

export default class ViewRecipe extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    };

    static contextType = fusionContext;

    handleDeleteRecipe = fused_id => {
        this.props.history.push(`/your-cookbook`);
    };
    
    render() {
        const {fusions=[]} = this.context;
        const {fused_id} = this.props.match.params;
        const fusionRecipe = fusions.find(fusion => fusion.fused_id === parseInt(fused_id)) || {};

        return (
            <section className="Recipe_Viewer">
                <Recipe
                    fused_id={fusionRecipe.fused_id}
                    fused_name={fusionRecipe.fused_name}
                    date_modified={fusionRecipe.date_modified}
                    base_cuisine={fusionRecipe.base_cuisine}
                    fuse_cuisine={fusionRecipe.fuse_cuisine}
                    fuse_ingredients={fusionRecipe.fuse_ingredients}
                    fuse_steps={fusionRecipe.fuse_steps}
                    onDeleteFusion={this.handleDeleteRecipe}
                />
            </section>
        );
    };
};