// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF_sXkcDJtBS1K6wov4RqHEV1AMMKpIck",
  authDomain: "today-plans-todo.firebaseapp.com",
  projectId: "today-plans-todo",
  storageBucket: "today-plans-todo.appspot.com",
  messagingSenderId: "452239237731",
  appId: "1:452239237731:web:ab535f192ebf30a03e8e56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;