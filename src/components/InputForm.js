import React, { useState } from 'react';
import './InputForm.css'

const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large']

const InputForm = ({onInsert, onDelete, onUpdate}) => {
    const [input, setInput] = useState('');

    const handleSubmit = (event, operation) => {
        event.preventDefault();
        if (operation === 'insert') {
            onInsert(input);
        } else if (operation === 'delete') {
            onDelete(input);
        } else if (operation === 'update') {
            onUpdate(input);
        }
        setInput('');
    };
    return (
        <form>

            <input type="text" value={input} onChange={e => setInput(e.target.value)} 
            Placeholder="Enter Data"
            />
            <button type="submit" onClick={e => handleSubmit(e, 'insert')}>Insert</button>
            <button type="submit" onClick={e => handleSubmit(e, 'delete')}>Delete</button>
            <button type="submit" onClick={e => handleSubmit(e, 'update')}>Update</button>
        </form>
    );

};

export default InputForm;