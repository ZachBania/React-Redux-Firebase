import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/firestore'; 

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});


// export const db = getFirestore(app);
export const db = firebase.firestore(); // Initialize Firestore and export it
export const auth = app.auth(); 
export const provider = new firebase.auth.GoogleAuthProvider();
export default app;