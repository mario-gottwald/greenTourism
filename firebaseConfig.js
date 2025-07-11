import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCROPCeXPMXZxvy8BYbXztslrYp1z6XAt4",
  authDomain: "greentourismo-a82df.firebaseapp.com",
  projectId: "greentourismo-a82df",
  storageBucket: "greentourismo-a82df.firebasestorage.app",
  messagingSenderId: "473150382792",
  appId: "1:473150382792:web:b03266983f36a9a9e2bbfd"
};

const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)  // AsyncStorage für persistente Authentifizierung verwenden
});
