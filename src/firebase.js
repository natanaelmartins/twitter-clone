import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB5BXSB67a6lEz-1xQPJuLqQ-t_STasGiQ",
  authDomain: "twitter-c89b2.firebaseapp.com",
  projectId: "twitter-c89b2",
  storageBucket: "twitter-c89b2.appspot.com",
  messagingSenderId: "853302776784",
  appId: "1:853302776784:web:51dc2be0e07c4a3fa71fd5",
  measurementId: "G-EPP8F1S4V2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
