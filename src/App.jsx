import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import db from './db/db.json';
import { addtoFirestore } from './helpers/addToFirestore';



export const App = () => {

    const { items } = db;

    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        full_name: '',
        email: '',
        birth_date: '',
        country_of_origin: 'argentina',
        terms_and_conditions: '',
    });


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({ ...formState, [name]: value });
    };

    const onFormSubmit = event => {
        event.preventDefault();
        navigate('/answers')
        addtoFirestore(formState);
    };

    return (
        <form onSubmit={onFormSubmit}>
            {items.map((item, index) => (
                <div key={index}>
                    <label htmlFor={item.name}>{item.label}</label>
                    {item.type !== 'select' ? (
                        <input
                            type={item.type}
                            name={item.name}
                            onChange={onInputChange}
                            required={item.required}
                        />
                    ) : (
                        <select
                            name={item.name}
                            onChange={onInputChange}
                            required={item.required}
                        >
                            {item.options.map(item => (
                                <option key={item.value} value={item.value}>
                                    {item.label}{' '}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            ))}
        </form>
    );
};
