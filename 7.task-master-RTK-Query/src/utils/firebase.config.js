import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtWsOEvWxrSgkwZ-NlGBjbjKbp2oNEY4g",
  authDomain: "simple-firebase-fa72f.firebaseapp.com",
  projectId: "simple-firebase-fa72f",
  storageBucket: "simple-firebase-fa72f.appspot.com",
  messagingSenderId: "431984378101",
  appId: "1:431984378101:web:697888429fba17933ec5bc",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
