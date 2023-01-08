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
        navigate('/answers');
        addtoFirestore(formState);
    };

    return (
        <div className='min-h-screen pt-4 px-4 flex flex-col items-center justify-center bg-hero bg-cover'>
            <div className='flex flex-col w-[400px] sm:w-[500px] bg-white/80 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-6 rounded-3xl w-50 max-w-md'>
                <h2 className='font-medium text-center text-xl sm:text-3xl text-slate'>
                    Challenge Greydive
                </h2>
                <hr className='mt-3  border-slate/40'/>
                <form onSubmit={onFormSubmit} className="mt-5">
                    {items.map((item, index) => (
                        <div key={index} className="flex flex-col mb-6 relative">
                            <label htmlFor={item.name} id={item.type} className="mb-1 text-xs tracking-wide text-slate">{item.label}</label>
                            {(item.type !== 'select') ? 
                                <input
                                    type={item.type}
                                    name={item.name}
                                    onChange={onInputChange}
                                    required={item.required}
                                    className="text-sm placeholder-gray-500 pl-3 pr-4 rounded-md border border-slate/40 w-full py-2 focus:outline-none focus:border-blue-400"
                                />
                              : (
                                <select
                                    name={item.name}
                                    onChange={onInputChange}
                                    required={item.required}
                                    className="text-sm placeholder-gray-500 pl-3 pr-4 rounded-md border border-slate/40 w-full py-2 focus:outline-none focus:border-blue-400"
                                >
                                    {item.options.map(item => (
                                        <option
                                            key={item.value}
                                            value={item.value}
                                        >
                                            {item.label}{' '}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
};
