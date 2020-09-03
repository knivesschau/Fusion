import React, { useState } from 'react';
import './AddModSteps.css';

// function using hooks to add or remove additional steps when user is using PATCH
export default function AddModSteps() {
    const [modSteps, setModSteps] = useState({ step: [] });

    function createInputs() {
        return modSteps.step.map((step, i) => 
            <ul id="add-mod-steps-list">
                <li id="mod-steps" key={i}>
                    <label htmlFor="add-mod-steps-inputs">
                        <textarea
                            required
                            className="AddMod_Steps"
                            rows="10"
                            id="mod-steps-add"
                            name="mod_steps"
                            placeholder="Type additional step here"
                            value={step || ""}
                            onChange={handleUpdate.bind(i)}/>
                    </label>
                    <button type="button" id="remove-mod-step" onClick={removeInput.bind({i})}>Remove</button>
                </li>
            </ul>
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
        <button type="button" id="add-mod-step" onClick={addInput}>Add Step</button>
        </>
    );
};
