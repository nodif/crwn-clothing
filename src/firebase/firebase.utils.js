import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDJlwcsYsFpRmXjTp2SfqwjDI203C-B8hQ",
    authDomain: "crwn-db-65cf5.firebaseapp.com",
    projectId: "crwn-db-65cf5",
    storageBucket: "crwn-db-65cf5.appspot.com",
    messagingSenderId: "849623224192",
    appId: "1:849623224192:web:d38dc2bdd29d66727dfb65",
    measurementId: "G-3QFDBQB7S6"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;