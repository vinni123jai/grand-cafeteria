// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXDD-VqcEhh-PR83bGmW3i_7oTkJi4EJE",
  authDomain: "cafeteria-contact-app.firebaseapp.com",
  projectId: "cafeteria-contact-app",
  storageBucket: "cafeteria-contact-app.firebasestorage.app",
  messagingSenderId: "14964608074",
  appId: "1:14964608074:web:5311af5e18f5cebaec2ab3"
};

const app = initializeApp(firebaseConfig);

// 🔥 THIS WAS MISSING
export const auth = getAuth(app);
export const db = getFirestore(app);
