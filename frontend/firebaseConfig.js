// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTk4XhxTyTj1U_U7KH7d5u_A35H8dsQxg",
  authDomain: "discos-depositos.firebaseapp.com",
  projectId: "discos-depositos",
  storageBucket: "discos-depositos.firebasestorage.app",
  messagingSenderId: "266160529057",
  appId: "1:266160529057:web:762b4246d636728d215ae0",
  measurementId: "G-3R69ZSDPRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export default app;
