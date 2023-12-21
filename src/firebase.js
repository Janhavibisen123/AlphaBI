// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdbYs_4A7coVc3HuMtzEYQzVg9D-6TIhM",
  authDomain: "alphabi-24b3e.firebaseapp.com",
  projectId: "alphabi-24b3e",
  storageBucket: "alphabi-24b3e.appspot.com",
  messagingSenderId: "81332965293",
  appId: "1:81332965293:web:118dd769beec55673e5b24",
  measurementId: "G-P1GCWSLX4E"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// export default {app, auth};

export default firebase;
