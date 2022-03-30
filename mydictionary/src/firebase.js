// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9uOQ7ZPK3bn8nhaBroNK9lgvsuKAU2uE",
  authDomain: "mydictionary-72a45.firebaseapp.com",
  projectId: "mydictionary-72a45",
  storageBucket: "mydictionary-72a45.appspot.com",
  messagingSenderId: "991839143880",
  appId: "1:991839143880:web:c4ea2d745d87b95f4662fd",
  measurementId: "G-X0K5PXQ0LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);