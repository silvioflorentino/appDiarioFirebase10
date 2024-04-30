import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBqlhTR2m1vBhWp3WZpn8ruFQgf3-glZa8",
    authDomain: "diariobd-aa52f.firebaseapp.com",
    projectId: "diariobd-aa52f",
    storageBucket: "diariobd-aa52f.appspot.com",
    messagingSenderId: "866907654222",
    appId: "1:866907654222:web:f6378cc9973c49551a1b1f"
};

const app = initializeApp(firebaseConfig);
export const firestore  = getFirestore(app);
