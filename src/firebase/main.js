// Import the functions you need from the SDKs you need
// import { get } from "core-js/core/dict";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCADVngogaFHh3MyyJXpuYXLCB9yuTA4G4",
    authDomain: "westeras-d5d28.firebaseapp.com",
    databaseURL: "https://westeras-d5d28-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "westeras-d5d28",
    storageBucket: "westeras-d5d28.appspot.com",
    messagingSenderId: "461693296162",
    appId: "1:461693296162:web:7f457dc8d87e33ffc4347b"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
export {ref, db, onValue};
