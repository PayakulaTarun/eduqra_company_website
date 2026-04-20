import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";

// TODO: Replace with your Eduqra Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDtTN8ntOjxTRzkPA3V_BxhCNaeDPqhUyU",
  authDomain: "eduqra-official.firebaseapp.com",
  projectId: "eduqra-official",
  storageBucket: "eduqra-official.firebasestorage.app",
  messagingSenderId: "514136405495",
  appId: "1:514136405495:web:677293f6619e5ae6236af2",
  measurementId: "G-Y1SF6Z0P3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const googleProvider = new GoogleAuthProvider();

/**
 * Custom Analytics Event Tracker
 */
export const trackEvent = (eventName, eventParams = {}) => {
  try {
    if (analytics) {
      logEvent(analytics, eventName, eventParams);
    }
    // Also push to GTM dataLayer if loaded
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams
      });
    }
  } catch (error) {
    console.warn("Analytics error: ", error);
  }
};

/**
 * Authentication Helper: Google Signup/Login
 */
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Check if user exists in Firestore, if not create record
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    
    if (!userSnap.exists()) {
      await setDoc(userRef, {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        role: 'student' // Default role
      });
      
      // Trigger Welcome Email (Placeholder for logic)
      console.log("Welcome email would be triggered for: ", user.email);
    } else {
      await setDoc(userRef, { lastLogin: serverTimestamp() }, { merge: true });
    }
    
    return user;
  } catch (error) {
    console.error("Error signing in with Google: ", error);
    throw error;
  }
};

export const logoutUser = () => signOut(auth);
