//APIキーの設定
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaHRu2hyx8JYmQJk9jJ-MHBKUNUu6A1js",
  authDomain: "next-blog-ff7c7.firebaseapp.com",
  projectId: "next-blog-ff7c7",
  storageBucket: "next-blog-ff7c7.appspot.com",
  messagingSenderId: "498797761337",
  appId: "1:498797761337:web:356e540be65347c252cee8",
  measurementId: "G-5MLQ06ZL6Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
