// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD5lJN0dc06ho5znfnskWPLdGywBufoY6I",
    authDomain: "login-app-2cdb8.firebaseapp.com",
    databaseURL: "https://login-app-2cdb8.firebaseio.com",
    projectId: "login-app-2cdb8",
    storageBucket: "login-app-2cdb8.appspot.com",
    messagingSenderId: "875491947164",
    appId: "1:875491947164:web:927547b45813abce66b359",
    measurementId: "G-D0PWZQSB07"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
