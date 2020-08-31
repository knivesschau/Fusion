import React, { useState } from 'react';
import './AddIngredients.css';

export default function AddIngredients() {
    const [ingredients, setIngredients] = useState({ ingredient: [] });

    function createInputs() {
        return ingredients.ingredient.map((ingredient, i) => 
            <li id="additional-ingredients" key={i}>
                <input
                    required
                    type="text"
                    id="fuse_ingredients"
                    name="fuse_ingredients"
                    value={ingredient || ""}
                    onChange={handleUpdate.bind(i)}/>

                <button type="button" id="remove-ingredient" onClick={removeInput.bind({i})}>Remove</button>
            </li>
        );
    };
    
    function handleUpdate(e) {
        let newIngredients = [...ingredients.ingredient];
        newIngredients[this] = e.target.value;

        setIngredients({
            ingredient: newIngredients
        });
    };

    const addInput = () => {
        setIngredients({
            ingredient: [...ingredients.ingredient, ""]
        });
    };

    const removeInput = () => {
        let newIngredients = [...ingredients.ingredient];
        newIngredients.splice(this, 1);

        setIngredients({
            ingredient: newIngredients
        });
    };

    return (
        <>
        {createInputs()}
        <button type="button" id="add-ingredient" onClick={addInput}>Add Ingredient</button>
        </>
    );
};
