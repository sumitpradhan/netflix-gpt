// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDh0te8Wlmx_GVPF0g4PQrrXu1PCVNz24",
  authDomain: "netflix-gpt-13e9e.firebaseapp.com",
  projectId: "netflix-gpt-13e9e",
  storageBucket: "netflix-gpt-13e9e.appspot.com",
  messagingSenderId: "582953398524",
  appId: "1:582953398524:web:081ef4d2c6fa8af19f2779",
  measurementId: "G-1DPJKK05JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();