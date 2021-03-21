// Fire Base here act as our server to store all the information realted to mail messages
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAWkS6rtdFI3dTdo1PYwPvRSZH7AhTRza0",
    authDomain: "project-831033021393945867.firebaseapp.com",
    projectId: "project-831033021393945867",
    storageBucket: "project-831033021393945867.appspot.com",
    messagingSenderId: "197840778441",
    appId: "1:197840778441:web:0dbe2047d85019eaff8918"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };
