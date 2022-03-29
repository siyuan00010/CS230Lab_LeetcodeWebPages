// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4DnQ2OcN1TVVl5S0i-AhgyHCJIc-MNWE",
  authDomain: "leetcode-590a6.firebaseapp.com",
  databaseURL: "https://leetcode-590a6-default-rtdb.firebaseio.com",
  projectId: "leetcode-590a6",
  storageBucket: "leetcode-590a6.appspot.com",
  messagingSenderId: "980756200166",
  appId: "1:980756200166:web:f958ebb5a260304756d927",
  measurementId: "G-K40VVN0PDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB4DnQ2OcN1TVVl5S0i-AhgyHCJIc-MNWE",
    authDomain: "leetcode-590a6.firebaseapp.com",
    databaseURL: "https://leetcode-590a6-default-rtdb.firebaseio.com",
    projectId: "leetcode-590a6",
    storageBucket: "leetcode-590a6.appspot.com",
    messagingSenderId: "980756200166",
    appId: "1:980756200166:web:f958ebb5a260304756d927",
    measurementId: "G-K40VVN0PDF"
  }

};

