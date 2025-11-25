import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQL864GWO9HFEiLSGkEHzIBg8aX3QRk60",
  authDomain: "my-portfolio-a9e65.firebaseapp.com",
  projectId: "my-portfolio-a9e65",
  storageBucket: "my-portfolio-a9e65.firebasestorage.app",
  messagingSenderId: "533701060084",
  appId: "1:533701060084:web:258a4b997c2ebb1f02c5a1",
  measurementId: "G-RC65Z8E15F"};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function addContactMessage(data) {
  const docRef = await addDoc(collection(db, "contacts"), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}