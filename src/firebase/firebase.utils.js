import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC4sOvkqHhKtquCjGbwPSBQO2cti5PYBE0",
    authDomain: "crwn-db-c585a.firebaseapp.com",
    databaseURL: "https://crwn-db-c585a.firebaseio.com",
    projectId: "crwn-db-c585a",
    storageBucket: "",
    messagingSenderId: "1005908589224",
    appId: "1:1005908589224:web:57e900b43f37a200"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;