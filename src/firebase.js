import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDUUzuhxAQ-0-TflEfOo7X1WQPnsfENgcs",
    authDomain: "netflix-build-bb288.firebaseapp.com",
    projectId: "netflix-build-bb288",
    storageBucket: "netflix-build-bb288.appspot.com",
    messagingSenderId: "405370472650",
    appId: "1:405370472650:web:b3706035b3a35be6f78c33"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };