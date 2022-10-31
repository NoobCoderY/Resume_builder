// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// 1. import
import "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
 export const firebaseConfig = {
    apiKey: "AIzaSyDufbpE41axNixCl0azqg5G05lF_L4AU-8",
    authDomain: "resumebuilder-ed340.firebaseapp.com",
    projectId: "resumebuilder-ed340",
    storageBucket: "resumebuilder-ed340.appspot.com",
    messagingSenderId: "158083569593",
    appId: "1:158083569593:web:ff74e21238bfaf9540c868"
  };
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;


