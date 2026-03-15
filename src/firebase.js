// Import Firebase core
import { initializeApp } from "firebase/app";

// Import Firebase Auth
import { getAuth } from "firebase/auth";

// (Optional) Analytics
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-KIrI3vxlCscLKFXz4FhVFH80eHkeNtw",
  authDomain: "gigle-7fe9f.firebaseapp.com",
  projectId: "gigle-7fe9f",
  storageBucket: "gigle-7fe9f.firebasestorage.app",
  messagingSenderId: "388768615738",
  appId: "1:388768615738:web:b593f5d37c711f44125403",
  measurementId: "G-J2NL522JB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);