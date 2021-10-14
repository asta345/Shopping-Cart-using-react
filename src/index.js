import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import * as firebase from "firebase";
import "firebase/firestore";

import { initializeApp } from "firebase/app";
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
initializeApp(firebaseConfig);

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// export default firebase;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

