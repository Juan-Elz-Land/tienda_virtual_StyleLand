import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, where,addDoc, getDocs,query, limit,deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUof0isYK03LxaLTGOBd1d3dA3Zq4ObMk",
  authDomain: "fir-tenda-virtual.firebaseapp.com",
  projectId: "fir-tenda-virtual",
  storageBucket: "fir-tenda-virtual.firebasestorage.app",
  messagingSenderId: "1057521662303",
  appId: "1:1057521662303:web:66db5f3ed6bb0b2aef9eea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const product_collection = collection(db,"Productos");
const contactos_Collection = collection(db,"Contactos");
export {firebaseConfig,product_collection,contactos_Collection,where,addDoc, getDocs,query, limit,deleteDoc, doc, updateDoc }
