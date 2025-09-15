// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDTMC8Com4uIeaUeGchhY-VCcrm0ciI2d0",
  authDomain: "arausportes-5b9bf.firebaseapp.com",
  projectId: "arausportes-5b9bf",
  storageBucket: "arausportes-5b9bf.firebasestorage.app",
  messagingSenderId: "470753243842",
  appId: "1:470753243842:web:a45d16cfbd45534a60015b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
