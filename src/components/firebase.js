import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5BXSB67a6lEz-1xQPJuLqQ-t_STasGiQ",
  authDomain: "twitter-c89b2.firebaseapp.com",
  projectId: "twitter-c89b2",
  storageBucket: "twitter-c89b2.appspot.com",
  messagingSenderId: "853302776784",
  appId: "1:853302776784:web:51dc2be0e07c4a3fa71fd5",
  measurementId: "G-EPP8F1S4V2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;

const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
