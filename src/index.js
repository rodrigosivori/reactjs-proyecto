import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQeueSkmHs5hEoh_NOs-qFYBu8a2Ys6VI",
  authDomain: "proyecto-amelia-cafe.firebaseapp.com",
  projectId: "proyecto-amelia-cafe",
  storageBucket: "proyecto-amelia-cafe.appspot.com",
  messagingSenderId: "28661859020",
  appId: "1:28661859020:web:76b984c8480493f8c87869"
};

// Initialize Firebase
initializeApp(firebaseConfig);

  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

