// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyDKJPRPdx0-DH6o6l_noQ3nDLc8PVYSB1s",
  authDomain: "test-web-2afda.firebaseapp.com",
  projectId: "test-web-2afda",
  storageBucket: "test-web-2afda.appspot.com",
  messagingSenderId: "718802661635",
  appId: "1:718802661635:web:4d2fe33740e521c6937936",
  measurementId: "G-6VD2PHQ1WC"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const firebaseStorage = getStorage(app);
;

export {app,auth,googleProvider, firebaseStorage};