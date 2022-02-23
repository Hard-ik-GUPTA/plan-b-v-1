import firebase from 'firebase/app';

import { initializeApp } from 'firebase/app';
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADl8NiEhsu6lH9G7oL1xiPN56F5ke_S-8",
    authDomain: "mathsquiz-848ba.firebaseapp.com",
    databaseURL: "https://mathsquiz-848ba-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mathsquiz-848ba",
    storageBucket: "mathsquiz-848ba.appspot.com",
    messagingSenderId: "967286619357",
    appId: "1:967286619357:web:4c2b5b8a6c4f7668f2af34"
  };

  const app= initializeApp(firebaseConfig)
  export const db=getFirestore(app)



