import React, { useState } from 'react';

const useSelect = (stateInitial, options) => {
    
    //state of custom hook
    const [ state, updateState ] = useState(stateInitial);

    //element name of interface
    const SelectNews = () => (

        <select
            className="browser-default"
            value={state}
            onChange={ e => updateState(e.target.value) }
        >
            { options.map( option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            )) }
        </select>
    );

    return [ state, SelectNews ]; 

}
 
export default useSelect;