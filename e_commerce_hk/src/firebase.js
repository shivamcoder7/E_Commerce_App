// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';


// const firebaseConfig = {
//     apiKey: "AIzaSyDdeqYg7F01iLFnz7VwCevO1KVagzvqWx8",
//     authDomain: "e-commerce-web-dccd0.firebaseapp.com",
//     projectId: "e-commerce-web-dccd0",
//     storageBucket: "e-commerce-web-dccd0.appspot.com",
//     messagingSenderId: "285080890891",
//     appId: "1:285080890891:web:f06eb5298d887d1a8c610e",
//     measurementId: "G-62E90YTBH1"
//   };

// //   const firebaseApp= firebase.initializeApp(firebaseConfig);
//   const firebaseApp= initializeApp(firebaseConfig);

//   const db = firebaseApp.firestore();
// // const db = getFirestore();
//   const auth = firebase.auth();

//   export default {db, auth};


// firebase.js

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDdeqYg7F01iLFnz7VwCevO1KVagzvqWx8",
  authDomain: "e-commerce-web-dccd0.firebaseapp.com",
  projectId: "e-commerce-web-dccd0",
  storageBucket: "e-commerce-web-dccd0.appspot.com",
  messagingSenderId: "285080890891",
  appId: "1:285080890891:web:f06eb5298d887d1a8c610e",
  measurementId: "G-62E90YTBH1"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
