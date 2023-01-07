import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyACgVBuL764xrNcHo_R0_gLNS3a8vUXMo4",
  authDomain: "challenge-d656d.firebaseapp.com",
  projectId: "challenge-d656d",
  storageBucket: "challenge-d656d.appspot.com",
  messagingSenderId: "933982966707",
  appId: "1:933982966707:web:f0470dcdfb1134d1d631c6"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);