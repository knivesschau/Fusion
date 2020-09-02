import React, { useState } from 'react';
import './AddSteps.css';

// function using hooks to add or remove additional steps when user is using POST
export default function AddSteps() {
    const [steps, setSteps] = useState({ step: [] });

    function createInputs() {
        return steps.step.map((step, i) => 
            <ul id="additional-steps-list">
                <li id="additional-steps" key={i}>
                    
                    <label htmlFor="add-steps-inputs">
                        <textarea
                            required
                            className="Add_Steps"
                            rows="10"
                            id={`fuse-steps-add-${i}`}
                            name="fuse_steps"
                            value={step || ""}
                            onChange={handleUpdate.bind(i)}/>
                    </label>

                    <button type="button" id="remove-step" onClick={removeInput.bind({i})}>Remove</button>
                </li>
            </ul>
        );
    };
    
    function handleUpdate(e) {
        let newSteps = [...steps.step];
        newSteps[this] = e.target.value;
        setSteps({
            step: newSteps
        });
    };

    const addInput = () => {
        setSteps({
            step: [...steps.step, ""]
        });
    };

    const removeInput = () => {
        let newSteps = [...steps.step];
        newSteps.splice(this, 1);
        setSteps({
            step: newSteps
        });
    };

    return (
        <>
        {createInputs()}
        <button type="button" id="add-step" onClick={addInput}>Add Step</button>
        </>
    );
};
