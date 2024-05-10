// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,
};
// VITE_apiKey=AIzaSyDBelfWwURuMS5-G0tvg1iVYGaeTZ-U9NY
// VITE_authDomain=restaurant-management-55f52.firebaseapp.com
// VITE_projectId=restaurant-management-55f52
// VITE_storageBucket=restaurant-management-55f52.appspot.com
// VITE_messagingSenderId=697435828781
// VITE_appId=1:697435828781:web:a1a9685d23150cfbbdfea4

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;