import { doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';


export const addtoFirestore = async (formState) => {
    const docRef = doc(FirebaseDB, 'challenge', 'answers');
    await setDoc(docRef, formState, { merge: true });
};
