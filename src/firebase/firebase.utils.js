import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_5CzVQHFSF4bTmfnQSeJHvZWJ2JFFZq4",
    authDomain: "lunchtime-31c65.firebaseapp.com",
    databaseURL: "https://lunchtime-31c65.firebaseio.com",
    projectId: "lunchtime-31c65",
    storageBucket: "",
    messagingSenderId: "4745133053",
    appId: "1:4745133053:web:0ed10b70d36e4714e7f794",
    measurementId: "G-1YXHGH8CQ5"
};

/* Initialize firebase app */
firebase.initializeApp(config);

/* export firebase modules */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Setup Google auth provider */
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

/* Store current user in database */
export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return;

    let userRef = firestore.doc(`users/${userAuth.uid}`);
    let userSnapShot = await userRef.get();

    if (!userSnapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                avatar: `https://dummyimage.com/squarepopup/${Math.floor(Math.random()*16777215).toString(16)}/ffffff&text=${displayName[0].toUpperCase()}`,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.error('error creting user', error.message);
        }
    }

    return userRef;
}

export default firebase;