  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBLDKkHfwUCgTJT1rMvYwcGQ0pYGLbB0xc",
    authDomain: "instagram-by-j.firebaseapp.com",
    databaseURL: "https://instagram-by-j.firebaseio.com",
    projectId: "instagram-by-j",
    storageBucket: "instagram-by-j.appspot.com",
    messagingSenderId: "757600104044",
    appId: "1:757600104044:web:e6aae05d54f55c50d4b249",
    measurementId: "G-V18ECEBT3E"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage };