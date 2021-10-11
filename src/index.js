import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";

import "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD72XIAehLV64QW1RVXW0akXneXRDNQzGY",
  authDomain: "cart-8e8c2.firebaseapp.com",
  databaseURL: "https://cart-8e8c2-default-rtdb.firebaseio.com",
  projectId: "cart-8e8c2",
  storageBucket: "cart-8e8c2.appspot.com",
  messagingSenderId: "286567248559",
  appId: "1:286567248559:web:4fe8e0820dc2b7060bda5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




ReactDOM.render(<App />, document.getElementById('root'));

// serviceWorker.unregister();