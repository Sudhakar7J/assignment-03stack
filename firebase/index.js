import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPrZEkzSgXG9bgEWmIkgrkt3sNPihVcEY",
  authDomain: "stackruit-assignment-d2ceb.firebaseapp.com",
  databaseURL:
    "https://stackruit-assignment-d2ceb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "stackruit-assignment-d2ceb",
  storageBucket: "stackruit-assignment-d2ceb.appspot.com",
  messagingSenderId: "255577519320",
  appId: "1:255577519320:web:88345ca60cbff9796193ad",
  measurementId: "G-BRHF1P4CP9",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
