import { getDocs, collection } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const getFromFirestore = async () => {
    const collectionRef = collection(FirebaseDB, 'challenge');
    const { docs } = await getDocs(collectionRef);
   return docs.map(doc =>  ({
    ...doc.data(),
    }));
    
};


