import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFromFirestore } from './helpers/getFromFirestore';

export const Answers = () => {
    const [answer, setAnswer] = useState('');

    const navigate = useNavigate();

    const results = async () => {
        const querySnapshot = await getFromFirestore();
        setAnswer(querySnapshot);
    };

    useEffect(() => {
        results();
    }, []);

    const onCLick = () => {
        navigate('/');
    };

    return (
        <div className='min-h-screen pt-4 px-4 flex flex-col items-center justify-center bg-hero bg-cover'>
            {!answer ? (
                <p className='mb-1 text-md font-semibold tracking-wide text-slate'>Loading...</p>
            ) : (
                <div className='flex flex-col w-[400px] sm:w-[500px] bg-white/80 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-6 rounded-3xl w-50 max-w-md'>
                    <h2 className='mb-2 font-medium text-center text-xl sm:text-3xl text-slate'>
                        Respuestas
                    </h2>
                    <hr className='mt-3  border-slate/40' />
                    <div className='flex mb-4 gap-4'>
                        <h2 className='mb-1 text-md font-semibold tracking-wide text-slate'>
                            Nombre:
                        </h2>
                        <p className='mb-1 text-md text-slate'>
                            {answer[0].full_name}
                        </p>
                    </div>
                    <hr className='mt-3  border-slate/40' />
                    <div className='flex mb-6 gap-4'>
                        <h2 className='mb-1 text-md font-semibold tracking-wide text-slate'>
                            Email:
                        </h2>
                        <p className='mb-1 text-md text-slate'>
                            {answer[0].email}
                        </p>
                    </div>
                    <hr className='mt-3  border-slate/40' />
                    <div className='flex mb-6 gap-4'>
                        <h2 className='mb-1 text-md font-semibold tracking-wide text-slate'>
                            Fecha nacimiento:
                        </h2>
                        <p className='mb-1 text-md text-slate'>
                            {answer[0].birth_date}
                        </p>
                    </div>
                    <hr className='mt-3  border-slate/40' />
                    <div className='flex mb-6 gap-4'>
                        <h2 className='mb-1 text-md font-semibold tracking-wide text-slate'>
                            País de origen:
                        </h2>
                        <p className='mb-1 text-md text-slate'>
                            {answer[0].country_of_origin}
                        </p>
                    </div>
                    <hr className='mt-3  border-slate/40' />
                    <div className='flex mb-6 gap-4'>
                        <h2 className='mb-1 text-md font-semibold tracking-wide text-slate'>
                            Acepta términos y condiciones:
                        </h2>
                        <p className='mb-1 text-md text-slate'>
                            {answer[0].terms_and_conditions}
                        </p>
                    </div>

                    <button
                        onClick={onCLick}
                        className='text-sm placeholder-gray-500 pl-3 pr-4 rounded-md border border-slate/40 w-full py-2 focus:outline-none focus:border-blue-400 hover:pointer hover:bg-slate/40'
                    >
                        Volver
                    </button>
                </div>
            )}
        </div>
    );
};
