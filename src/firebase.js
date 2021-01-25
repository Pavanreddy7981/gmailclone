import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

 const firebaseConfig = {
    apiKey: "AIzaSyBeTeoNNJ9D8JQuaK2JajqZGrGLacLeEZ0",
    authDomain: "clone-755b2.firebaseapp.com",
    projectId: "clone-755b2",
    storageBucket: "clone-755b2.appspot.com",
    messagingSenderId: "52052037445",
    appId: "1:52052037445:web:9dd298d80f357b9c8ff82c",
    measurementId: "G-H65L6WZM4T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider}