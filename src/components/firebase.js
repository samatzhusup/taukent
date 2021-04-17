import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHGCLM-9PrNz2YGe-tC-PSDhCVf1XQUSo",
    authDomain: "tausamaly-8159a.firebaseapp.com",
    projectId: "tausamaly-8159a",
    storageBucket: "tausamaly-8159a.appspot.com",
    messagingSenderId: "214744786710",
    appId: "1:214744786710:web:a292af321b20d30d889237",
    measurementId: "G-5ZQWW1X7JW"
});

var db = firebaseApp.firestore();

export { db };