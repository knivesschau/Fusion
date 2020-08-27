import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fusionContext from '../../fusionContext';
import './PickStarter.css';

export default class PickStarter extends Component {
    
    static contextType = fusionContext; 

    render() {
        
        const {bases=[]} = this.context;

        return (
            <>
            <section className="Pick_Starter">

                <div className="Starter_Recipes">
                    <h1 id="begin-fuse">Begin Fusing</h1>
                    <h2 id="select-recipe">Select a Starter Recipe to Begin Fusing:</h2>
                    
                    <ul id="starter-recipes">
                    {bases.map((base, i) => {
                        return (
                            <li key={i}>
                                <Link to={`/bases/${base.recipe_id}`} key={i}>
                                    <h3>{base.base_name} ({base.cuisine_name})</h3>
                                </Link>
                            </li>
                        );
                    })}
                    </ul>
                </div>
            </section>  
            </>
        );
    };
};