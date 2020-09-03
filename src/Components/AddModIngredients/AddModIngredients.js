import React, { useState } from 'react';
import './AddModIngredients.css';

// function using hooks to add or remove additional ingredients when user is using PATCH
export default function AddModIngredients() {
    const [modIngredients, setModIngredients] = useState({ 
        ingredient: [],
    });

    function createInputs() {
        return modIngredients.ingredient.map((ingredient, i) => 
            <ul id="add-mod-ingredients-list">
                <li id="add-mod-ingredients" key={i}>
                    <label htmlFor="add-mod-ingredients-inputs">
                        <input
                            required
                            className="AddMod_Ingredients"
                            type="text"
                            id="mod-ingredients-add"
                            name="mod_ingredients"
                            placeholder="Enter new ingredient here"
                            value={ingredient || ""}
                            onChange={handleUpdate.bind(i)}/>
                    </label>
                    <button type="button" id="remove-mod-ingredient" onClick={removeInput.bind({i})}>Remove</button>
                </li>
            </ul>
        );
    };
    
    function handleUpdate(e) {
        let newIngredients = [...modIngredients.ingredient];
        newIngredients[this] = e.currentTarget.value;

        setModIngredients({
            ingredient: newIngredients
        });
    };

    const addInput = () => {
        setModIngredients({
            ingredient: [...modIngredients.ingredient, ""]
        });
    };

    const removeInput = () => {
        let newIngredients = [...modIngredients.ingredient];
        newIngredients.splice(this, 1);

        setModIngredients({
            ingredient: newIngredients
        });
    };

    return (
        <>
        {createInputs()}
        <button type="button" id="add-mod-ingredient" onClick={addInput}>Add Ingredient</button>
        </>
    );
};
