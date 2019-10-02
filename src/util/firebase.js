import * as firebase from "firebase/app";
import "firebase/firestore";
const { REACT_APP_FIREBASE_API_KEY } = process.env;

//Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: "edible-abacus.firebaseapp.com",
  databaseURL: "https://edible-abacus.firebaseio.com",
  projectId: "edible-abacus",
  storageBucket: "",
  messagingSenderId: "1078686159485",
  appId: "1:1078686159485:web:bd8e36a439673813aa5714",
  measurementId: "G-7ESYG19Z6R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(process.env);
console.log(firebaseConfig);
export default firebase;
