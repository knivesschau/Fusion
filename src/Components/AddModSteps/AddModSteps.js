import React, { useState } from 'react';
import './AddModSteps.css';

export default function AddModSteps() {
    const [modSteps, setModSteps] = useState({ step: [] });

    function createInputs() {
        return modSteps.step.map((step, i) => 
            <li id="add-mod-steps" key={i}>
                <textarea
                    rows="10"
                    id="mod_steps"
                    name="mod_steps"
                    value={step || ""}
                    onChange={handleUpdate.bind(i)}/>

                <button type="button" id="remove-mod-ingredient" onClick={removeInput.bind({i})}>Remove</button>
            </li>
        );
    };
    
    function handleUpdate(e) {
        let newSteps = [...modSteps.step];
        newSteps[this] = e.target.value;

        setModSteps({
            step: newSteps
        });
    };

    const addInput = () => {
        setModSteps({
            step: [...modSteps.step, ""]
        });
    };

    const removeInput = () => {
        let newSteps = [...modSteps.step];
        newSteps.splice(this, 1);

        setModSteps({
            step: newSteps
        });
    };

    return (
        <>
        {createInputs()}
        <button type="button" id="add-mod-stept" onClick={addInput}>Add Ingredient</button>
        </>
    );
};
