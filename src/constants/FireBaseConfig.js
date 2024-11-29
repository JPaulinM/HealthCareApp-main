// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { 
  initializeAuth, 
  getReactNativePersistence, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQqMtPyQtXm8dfuJQKK2ITjtjj_Ui1MkE",
  authDomain: "drgpt-ad363.firebaseapp.com",
  projectId: "drgpt-ad363",
  storageBucket: "drgpt-ad363.firebasestorage.app",
  messagingSenderId: "449715385470",
  appId: "1:449715385470:web:ed04539b6f9d0a3a8f142f",
  measurementId: "G-TQP1C7WLVZ",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Export Firebase Auth methods
export const createUserWithEmail = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
};

// Export auth instance if needed elsewhere
export { auth };
