import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDdXYwCHjWzGApEzRBTnRni67HybPTGTLU",
  authDomain: "teste-472f5.firebaseapp.com",
  projectId: "teste-472f5",
  storageBucket: "teste-472f5.firebasestorage.app",
  messagingSenderId: "485192040842",
  appId: "1:485192040842:web:6b949a1bae1482899d8873"
};

const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: true
});

export const auth = getAuth(app);
