import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu-5K9QwT-jSXGM8UKNgY0eCmZmHLZXxs",
  authDomain: "auth-rs-ef0dc.firebaseapp.com",
  projectId: "auth-rs-ef0dc",
  storageBucket: "auth-rs-ef0dc.appspot.com",
  messagingSenderId: "1022031802978",
  appId: "1:1022031802978:web:feeed5b7767a790879173b",
  measurementId: "G-9N299CELTB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
