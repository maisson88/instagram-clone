

import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsHqpDXWyb6MqESoJqF1ncNnLaD7lkJYw",
  authDomain: "insta-clone-17ec5.firebaseapp.com",
  projectId: "insta-clone-17ec5",
  storageBucket: "insta-clone-17ec5.appspot.com",
  messagingSenderId: "88491557345",
  appId: "1:88491557345:web:8a18f73eac1972e0ef52a0",
  measurementId: "G-7K5VSJ50T8"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const firestore=getFirestore(app)
const storage=getStorage(app)

export {app,auth,firestore,storage}