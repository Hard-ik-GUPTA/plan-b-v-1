import firebase from 'firebase/app';

import { initializeApp } from 'firebase/app';
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGzWsRSDFUEWDEC8qsZcGFQ1kx3TPGM4k",
  authDomain: "plan-b-webapp.firebaseapp.com",
  projectId: "plan-b-webapp",
  storageBucket: "plan-b-webapp.appspot.com",
  messagingSenderId: "787884073322",
  appId: "1:787884073322:web:48b8f465ef1b5ac2234513",
  measurementId: "G-5GMJHSQGH6"
  
  };

  const app= initializeApp(firebaseConfig)
  export const db=getFirestore(app)



