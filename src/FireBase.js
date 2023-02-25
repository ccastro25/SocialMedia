// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAojQPalSg5PwXDvUvZNga0kLD6rbe8B4I",
  authDomain: "socialmedia-4b743.firebaseapp.com",
  projectId: "socialmedia-4b743",
  storageBucket: "socialmedia-4b743.appspot.com",
  messagingSenderId: "965145285748",
  appId: "1:965145285748:web:983eb4e9f34cd8de3fed21",
  measurementId: "G-W2YE2T4N91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;