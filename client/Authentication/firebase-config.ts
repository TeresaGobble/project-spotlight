import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBM_4ZLrrHte2ll3fdr-3z7RqnUN-tMmB8",
  authDomain: "project-spotlight-db36d.firebaseapp.com",
  projectId: "project-spotlight-db36d",
  storageBucket: "project-spotlight-db36d.appspot.com",
  messagingSenderId: "700718681262",
  appId: "1:700718681262:web:d970c89801ee2d3651b13f",
  measurementId: "G-VLGM7NLGM5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
