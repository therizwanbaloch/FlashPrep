import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "flashprep-16bc8.firebaseapp.com",
  projectId: "flashprep-16bc8",
  storageBucket: "flashprep-16bc8.firebasestorage.app",
  messagingSenderId: "807182900838",
  appId: "1:807182900838:web:8c44a75bf75510271397a7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const Provider = new GoogleAuthProvider();

export { auth, Provider };
