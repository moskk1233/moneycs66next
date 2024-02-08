import { initializeApp } from "firebase/app"
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore"
import { connectStorageEmulator, getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA28eVhO9gJhubYasFORr0O4b-LciD4wdI",
  authDomain: "msucs66.firebaseapp.com",
  databaseURL: "https://msucs66-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "msucs66",
  storageBucket: "msucs66.appspot.com",
  messagingSenderId: "980959982025",
  appId: "1:980959982025:web:086e5cc5ddeb8a2a6c7818",
  measurementId: "G-7YLSZ7ET21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
connectFirestoreEmulator(db, "127.0.0.1", 8080)
connectStorageEmulator(storage, "127.0.0.1", 9199)

export {
  db,
  storage
}