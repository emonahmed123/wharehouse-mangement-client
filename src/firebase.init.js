// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:process.env.API_KEY,
  // authDomain:process.env.AUTHDOMAIN,
  // projectId:process.env.PROJECTID,
  // storageBucket:process.env.STORAGEBUCKET,
  // messagingSenderId:process.env.MESSAGINSENDERID,
  // appId:process.env.APPID



// Your web app's Firebase configuration

  apiKey: "AIzaSyA_ShZxSZ8cdmLnAOwnwR-_hd-o8JaR_cE",
  authDomain: "warehouse-82822.firebaseapp.com",
  projectId: "warehouse-82822",
  storageBucket: "warehouse-82822.appspot.com",
  messagingSenderId: "855026309712",
  appId: "1:855026309712:web:036c65d4f4ec4c909e4f55"


 




};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;