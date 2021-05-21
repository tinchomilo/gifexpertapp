import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const[inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2 ){
            setCategories((cats) => [ inputValue, ...cats ]);
            //              |callback de setCategories.
            setInputValue('')// hace que se borre el input luego de darle enter
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
            type= 'text' 
            value={ inputValue}  
            onChange={ handleInputChange }
            placeholder='ingresa una categoria...'/>
        </form>
    )
}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}