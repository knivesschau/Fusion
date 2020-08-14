import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PickBase from '../PickBase/PickBase';
import BaseViewer from '../BaseViewer/BaseViewer';
import baseRecipes from '../../base_recipe_store';
import './FuseRecipe.css';

export default class FuseRecipe extends Component {
    render() {
        return (
            <section className="Fuse_Recipe">
                <form className="Fusion_Form">
                  <PickBase/>
                  <BaseViewer recipes={baseRecipes.baseRecipes}/>
                </form>
            </section>
        );
    }
}