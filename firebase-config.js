// Reemplaza los valores por los tuyos de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCojJcrQ4TViKXN2mKireglt_4QOFVk4ac",
  authDomain: "mexicanos-c0cab.firebaseapp.com",
  databaseURL: "https://mexicanos-c0cab-default-rtdb.firebaseio.com",
  projectId: "mexicanos-c0cab",
  storageBucket: "mexicanos-c0cab.firebasestorage.app",
  messagingSenderId: "287831544587",
  appId: "1:287831544587:web:b6a5ceae7cfaad90e1c80e",
  measurementId: "G-JCM9TGFWKC"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
