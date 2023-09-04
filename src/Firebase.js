// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // Import auth functions and providers




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGohfNgciM9sgkcMXyPw7b1k4LfK3JfMI",
  authDomain: "dojo-blog-b364b.firebaseapp.com",
  projectId: "dojo-blog-b364b",
  storageBucket: "dojo-blog-b364b.appspot.com",
  messagingSenderId: "319743696533",
  appId: "1:319743696533:web:9015d5e0d92cb54e4a459c",
  measurementId: "G-LM04JKDBWP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get the auth and provider objects
const auth = getAuth(app); // Initialize auth using the app instance
const provider = new GoogleAuthProvider(); // Initialize the Google Auth provider

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
  prompt : "select_account "
});

const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export { auth, provider, signInWithGooglePopup }; // Export the auth and provider objects

