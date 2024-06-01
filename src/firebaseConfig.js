// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvctKPR-nkGpgB0QGH6OzLKeDvPyCkNIo",
  authDomain: "djlx-6e6f8.firebaseapp.com",
  projectId: "djlx-6e6f8",
  storageBucket: "djlx-6e6f8.appspot.com",
  messagingSenderId: "1083758873117",
  appId: "1:1083758873117:web:14031f17b7d8ebab5954f4",
  measurementId: "G-DVY99K631Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export  {auth, provider};