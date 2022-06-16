import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyB8AYhVnKcW_PM8vK_PccigG4qt9-_KVvw",
    authDomain: "crwn-db-ed576.firebaseapp.com",
    projectId: "crwn-db-ed576",
    storageBucket: "crwn-db-ed576.appspot.com",
    messagingSenderId: "636456055310",
    appId: "1:636456055310:web:128d33290839f6ee39425f",
    measurementId: "G-P86N5J7FYY"
  }

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!userRef.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating message', error.message);
        }
        return userRef;
    }
}

export const convertCollectionsSnapshotToMaps = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    },{})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;