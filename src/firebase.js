// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdKKpVUNOOxNNECsHgkQHFQtzH6YlFUUg",
  authDomain: "clone-954c9.firebaseapp.com",
  projectId: "clone-954c9",
  storageBucket: "clone-954c9.appspot.com",
  messagingSenderId: "206919925507",
  appId: "1:206919925507:web:6babd1b1d834e64c10b336",
  measurementId: "G-Q62F24MCB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);