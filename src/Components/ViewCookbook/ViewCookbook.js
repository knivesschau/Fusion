import React, { Component } from 'react';
import fusionContext from '../../fusionContext';
import RecipeInfo from '../RecipeInfo/RecipeInfo';
import './ViewCookbook.css';

export default class ViewCookbook extends Component {
    static contextType = fusionContext; 

    render() {
        
        const {fusions=[]} = this.context; 

        return (
            <section className="Your_Cookbook">
                
                <h1 id="cookbook-home">Your Cookbook</h1>

                <div className="Welcome_Message">
                    <span id="welcome">Welcome! Look at your recipes below, or click "Fuse" to make one!</span>
                </div>

                <ul>
                    {/* pass through context to RecipeInfo Component via props */}
                    {fusions.map(fusion =>
                        <li key={fusion.fused_id}>
                            <RecipeInfo
                                fused_id={fusion.fused_id}
                                fused_name={fusion.fused_name}
                                date_created={fusion.date_created}
                                base_cuisine={fusion.base_cuisine}
                                fuse_cuisine={fusion.fuse_cuisine}
                            />
                        </li>
                    )}
                </ul>

            </section>
        );
    };
};