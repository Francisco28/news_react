import React, { useState } from 'react';

const useSelect = (stateInitial, options) => {
    
    //state of custom hook
    const [ state, updateState ] = useState('');

    //element name of interface
    const SelectNews = () => (

        <select
            className="browser-default"
        >
            <option value="">Select</option>
        </select>
    )

    return [ state, SelectNews ]; 

}
 
export default useSelect;