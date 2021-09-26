import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCFAzQ4KSFMbTs3Dd2tnr4VggmBfLwwaCs",
    authDomain: "crwn-db-be7d5.firebaseapp.com",
    projectId: "crwn-db-be7d5",
    storageBucket: "crwn-db-be7d5.appspot.com",
    messagingSenderId: "731392786938",
    appId: "1:731392786938:web:af2064b170605bbc846443",
    measurementId: "G-M5H7V5QTMT"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
