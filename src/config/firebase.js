import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBk0HoU2gxIVRuMyM-mGdmDqFeCUiiH2-8",
  authDomain: "evernote-clone-1ae5c.firebaseapp.com",
  databaseURL: "https://evernote-clone-1ae5c.firebaseio.com",
  projectId: "evernote-clone-1ae5c",
  storageBucket: "evernote-clone-1ae5c.appspot.com",
  messagingSenderId: "723333856553",
  appId: "1:723333856553:web:9294d5adcbf2bff8530b38",
  measurementId: "G-KQDPQEYHFJ",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth, firebase };
