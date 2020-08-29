import React, { useState } from 'react';
import './AddModIngredients.css';

export default function AddModIngredients() {
    const [modIngredients, setModIngredients] = useState({ ingredient: [] });

    function createInputs() {
        return modIngredients.ingredient.map((ingredient, i) => 
            <li id="add-mod-ingredients" key={i}>
                <input
                    type="text"
                    id="mod_ingredients"
                    name="mod_ingredients"
                    value={ingredient || ""}
                    onChange={handleUpdate.bind(i)}/>

                <button type="button" id="remove-mod-ingredient" onClick={removeInput.bind({i})}>Remove</button>
            </li>
        );
    };
    
    function handleUpdate(e) {
        let newIngredients = [...modIngredients.ingredient];
        newIngredients[this] = e.target.value;

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
