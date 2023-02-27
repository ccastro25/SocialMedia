// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkVaQgyjhelokS_UxbhIpAZslFcc7i88k",
  authDomain: "platanerozsocialapp.firebaseapp.com",
  projectId: "platanerozsocialapp",
  storageBucket: "platanerozsocialapp.appspot.com",
  messagingSenderId: "738725102457",
  appId: "1:738725102457:web:71562f4285881945f725a8",
  measurementId: "G-DYTKR9P23R"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app