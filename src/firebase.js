import * as firebase from "firebase/app";
import "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOtrq4m2oAi_absYBeG3M0JjR3xDrNGNc",
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

export default firebase;
