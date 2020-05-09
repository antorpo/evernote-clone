import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Create conexion with firebase using firestore.
const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBk0HoU2gxIVRuMyM-mGdmDqFeCUiiH2-8",
  authDomain: "evernote-clone-1ae5c.firebaseapp.com",
  databaseURL: "https://evernote-clone-1ae5c.firebaseio.com",
  projectId: "evernote-clone-1ae5c",
  storageBucket: "evernote-clone-1ae5c.appspot.com",
  messagingSenderId: "723333856553",
  appId: "1:723333856553:web:9294d5adcbf2bff8530b38",
  measurementId: "G-KQDPQEYHFJ",
});

const container = document.getElementById("root");

ReactDOM.render(<App />, container);
