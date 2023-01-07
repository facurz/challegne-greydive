import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFromFirestore } from './helpers/getFromFirestore';

export const Answers = () => {
    const [answer, setAnswer] = useState('');

    const navigate = useNavigate()
    
    const results = async () => {
        const querySnapshot = await getFromFirestore();
        setAnswer(querySnapshot);
    };

    useEffect(() => {
        results();
    }, []);

    const onCLick = ()=>{
        navigate('/')
    }
    
    return (
        <div>
            {!answer ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>{`Nombre: ${answer[0].full_name}`}</p>
                    <hr />
                    <p>{`Email: ${answer[0].email}`}</p>
                    <hr/>
                    <p>{`Fecha nacimiento: ${answer[0].birth_date}`}</p>
                    <hr/>
                    <p>{`País de origen: ${answer[0].country_of_origin}`}</p>
                    <hr/>
                    <p>{`Acepta térmicnos y condiciones: ${answer[0].terms_and_conditions}`}</p>
                    <hr/>

                    <button onClick={onCLick}>Volver</button>
                </div>
            )}
        </div>
    );
};
