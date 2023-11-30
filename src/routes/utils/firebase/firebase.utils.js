import { initializeApp } from "firebase/app";

// import method from authentication
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// import metod from fireStore
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArnIqAh_I1fCzXzZiV6YMwTXCA1l34YHY",
  authDomain: "crwn-clothing-fdd03.firebaseapp.com",
  projectId: "crwn-clothing-fdd03",
  storageBucket: "crwn-clothing-fdd03.appspot.com",
  messagingSenderId: "140404776627",
  appId: "1:140404776627:web:a61c315cf02df3b9b79ac6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// initialize fireStore , db : database
export const db = getFirestore();

// getting data from authemtication service and store that inside firebase
export const creatuserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid); // user is collection
  console.log(userDocRef);

  // get data related to document
  const userSnapshot = await getDoc(userDocRef); // snapshat kind like a data , also kind of object
  console.log(userSnapshot);
  console.log(userSnapshot.exists()); // the exists gives us a boolean

  // if userSnapshot does not exsist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error creating the user", error.massage);
    }
  }
  return userDocRef;
};
