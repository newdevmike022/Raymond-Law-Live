import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIRESTORE_KEY}`,
    authDomain: "raymondlawlive-2e920.firebaseapp.com",
    projectId: "raymondlawlive-2e920",
    storageBucket: "raymondlawlive-2e920.appspot.com",
    messagingSenderId: "1089092688699",
    appId: "1:1089092688699:web:cfc8567f53c16c5a24351e",
    measurementId: "G-V7YVSZPLSX"
  };

// Initialize Firebase
const firebaseDb = firebase.initializeApp(firebaseConfig);

export default firebaseDb.database().ref();