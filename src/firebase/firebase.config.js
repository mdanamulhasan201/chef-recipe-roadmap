// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV4I8Oh3mIZEtw43EsMbjIBDalnSDBEXY",
  authDomain: "chef-recipe-hunter-b032b.firebaseapp.com",
  projectId: "chef-recipe-hunter-b032b",
  storageBucket: "chef-recipe-hunter-b032b.appspot.com",
  messagingSenderId: "28113932398",
  appId: "1:28113932398:web:cbb8e55e645965ae5a567f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app