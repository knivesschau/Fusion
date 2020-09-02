import React, { Component } from 'react';
import fusionContext from '../../fusionContext';
import { Link } from 'react-router-dom';
import chefhat from '../../images/chef-hat.png';
import './RecipeInfo.css';

export default class RecipeInfo extends Component {
    static contextType = fusionContext; 

    // render cuisines that have been fused. if no fusion, leave out "fuse_cuisine" category 
    renderCuisineInfo() {
        const {base_cuisine, fuse_cuisine} = this.props;

        if (fuse_cuisine === null || fuse_cuisine === 'None') {
            return (
                <>{base_cuisine}</>
            );
        }
        else {
            return (
                <>{base_cuisine}, {fuse_cuisine}</>
            );
        }
    };

    render() {

        const {fused_id, fused_name, date_created} = this.props;

        return (
            <section className="Recipe_Info">
                 
                 <div className="Recipe_Mini">
                    <Link id="Recipe_MiniInfo" to={`/view-recipe/${fused_id}`}>
                        <img src={chefhat} id="chef-hat-icon" alt="chef hat"/>
                        <h2 id="recipe-name">{fused_name}</h2>
                    </Link>

                    <h3 id="recipe-created">Created On: {new Date(date_created).toLocaleDateString()}</h3>

                    <h4 id="culinary-styles">{this.renderCuisineInfo()}</h4>
                </div>

            </section>
        );
    };
};