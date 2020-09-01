import React, { Component } from 'react';
import config from '../../config';
import fusionContext from '../../fusionContext';
import ModifyViewer from '../ModifyViewer/ModifyViewer';
import TokenService from '../../services/token-services';
import './ModifyRecipe.css';

export default class ModifyRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...props 
        };

        this.baseState = this.state;
    };
    
    static defaultProps = {
        match: {
            params: {}
        }
    };

    static contextType = fusionContext; 

    handleResetClick = () => {
        this.setState(this.baseState);
        window.alert("Recipe reset! All steps and ingredients have been reset to their original modifications.")
    };

    // handle PATCH requests of user-fused recipes
    handleModifyRecipe = e => {
        e.preventDefault();

        const {fused_id} = this.props.match.params; 
        const fuseId = parseInt(fused_id);

        const modifyRecipe = {
            date_modified: new Date(),
            fused_name: e.target["fuse_name_mod"].value,
            fuse_ingredients: Array.from(e.target["mod_ingredients"]).map(ingredient => ingredient.value).join("\n"),
            fuse_steps: Array.from(e.target["mod_steps"]).map(step => step.value).join("\n")
        };

        fetch(`${config.API_ENDPOINT}/recipes/${fuseId}`, {
            method: "PATCH",
            body: JSON.stringify(modifyRecipe),
            headers: {
                "content-type": "application/json",
                "authorization": `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e));
                }
            })
            .then(() => {
                this.context.updateFusion(modifyRecipe);
                window.location=`/view-recipe/${fuseId}`;
            })
            .catch(error => {
                console.error({error});
            });
    };

    render() {
        const {fusions=[]} = this.context;
        const {fused_id} = this.props.match.params;
        const fuseRecipe = fusions.find(fusion => fusion.fused_id === parseInt(fused_id)) || {};

        return (
            <section className="Modify_Recipe">

                <form className="Modify_Form" onSubmit={this.handleModifyRecipe}>
                    {/* pass all starter recipe data to ModifyViewer Component via props */}
                    <ModifyViewer
                        fused_id={fuseRecipe.fused_id}
                        fused_name={fuseRecipe.fused_name}
                        date_modified={fuseRecipe.date_modified}
                        fuse_ingredients={fuseRecipe.fuse_ingredients}
                        fuse_steps={fuseRecipe.fuse_steps}
                        base_cuisine={fuseRecipe.base_cuisine}
                        fuse_cuisine={fuseRecipe.fuse_cuisine}/>

                    <button type="submit" id="submit-mod">Modify Recipe</button>
                    <button type="reset" onClick={this.handleResetClick} id="restart-mod">Start Over</button>
                </form>

            </section> 
        );
    };
};