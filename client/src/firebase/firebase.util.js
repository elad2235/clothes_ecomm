import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5oBu6Xhg5zxIGNIUPXwHiuZoBd_LbxYw",

  authDomain: "clothing-ecomm-9983e.firebaseapp.com",

  projectId: "clothing-ecomm-9983e",

  storageBucket: "clothing-ecomm-9983e.appspot.com",

  messagingSenderId: "472421903820",

  appId: "1:472421903820:web:d076f1492654df5ce64169",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error(err);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
