// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: import.meta.env.VITE_APIKEY,
      authDomain: import.meta.env.VITE_AUTHDOMAIN,
      projectId: import.meta.env.VITE_PROJECTID,
      storageBucket: import.meta.env.VITE_STORAGEBUCKET,
      messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
      appId: import.meta.env.VITE_APPID,

   /*  apiKey: "AIzaSyCdHs3d5DSP3-byZ7YKZbcjfFEohTCL0Hg",
    authDomain: "putul-9015f.firebaseapp.com",
    projectId: "putul-9015f",
    storageBucket: "putul-9015f.appspot.com",
    messagingSenderId: "301199539858",
    appId: "1:301199539858:web:e0872e8cc547bebb7f304b" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;