// Install Firebase v10+: npm install firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: move these values to .env and reference via import.meta.env / process.env
const firebaseConfig = {
  apiKey:     "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId:  "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
