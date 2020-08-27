import React from 'react';

export default React.createContext({
    fusions: [],
    bases: [],
    cuisines: [],
    addFusion: () => {},
    deleteFusion: () => {},
    updateFusion: () => {}
});