import firebase from 'firebase/app';

import { initializeApp } from 'firebase/app';
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxvcnqTni6kkM2SNQEsXyVI3zon_tALqs",
    authDomain: "plan-b-416e4.firebaseapp.com",
    projectId: "plan-b-416e4",
    storageBucket: "plan-b-416e4.appspot.com",
    messagingSenderId: "723325654397",
    appId: "1:723325654397:web:303f332c4675982deea814",
    measurementId: "G-LSXNN46NH3"
  
  };

  const app= initializeApp(firebaseConfig)
  export const db=getFirestore(app)



