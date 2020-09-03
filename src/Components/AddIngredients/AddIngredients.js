import React, { useState } from 'react';
import './AddIngredients.css';

// function using hooks to add or remove additional ingredients when user is using POST 
export default function AddIngredients() {
    const [ingredients, setIngredients] = useState({ ingredient: [] });

    function createInputs() {
        return ingredients.ingredient.map((ingredient, i) => 
            <ul id="add-ingredients">
                <li id="add-ingredients-list" key={i}>
                    <label htmlFor="add-ingredients-inputs">
                        <input
                            required
                            className="Add_Ingredients"
                            type="text"
                            id="fuse-ingredients-add"
                            name="fuse_ingredients"
                            placeholder="Type new ingreident here"
                            value={ingredient || ""}
                            onChange={handleUpdate.bind(i)}/>
                    </label>
                    <button type="button" id="remove-ingredient" onClick={removeInput.bind({i})}>Remove</button>
                </li>
            </ul>
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
