import React, { useState } from 'react';
import './AddSteps.css';

export default function AddSteps() {
    const [steps, setSteps] = useState({ step: [] });

    function createInputs() {
        return steps.step.map((step, i) => 
            <li id="additional-steps" key={i}>
                <textarea
                    required
                    rows="10"
                    id="fuse_steps"
                    name="fuse_steps"
                    value={step || ""}
                    onChange={handleUpdate.bind(i)}/>

                <button type="button" id="remove-step" onClick={removeInput.bind({i})}>Remove</button>
            </li>
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
