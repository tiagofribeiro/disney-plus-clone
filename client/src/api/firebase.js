// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


// Configuração do Firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "disney-clone-52c33.firebaseapp.com",
    projectId: "disney-clone-52c33",
    storageBucket: "disney-clone-52c33.appspot.com",
    messagingSenderId: "613173184587",
    appId: "1:613173184587:web:1c8f3a4034fa5cd36fe5ce",
    measurementId: "G-ENH19BHBPZ" // opcional na SDK v7.20+
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

const handleSignIn = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            return result;
        })
        .catch((error) => {
            alert(error.message);
        })
}

export { storage, db, handleSignIn };