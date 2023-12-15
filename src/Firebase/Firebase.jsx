import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBFQN0Xz5nzYSbvj5xD96n9-Qb7IYIb8eQ",
    authDomain: "leave-management-system-71cfb.firebaseapp.com",
    databaseURL: "https://leave-management-system-71cfb-default-rtdb.firebaseio.com",
    projectId: "leave-management-system-71cfb",
    storageBucket: "leave-management-system-71cfb.appspot.com",
    messagingSenderId: "180084139728",
    appId: "1:180084139728:web:8be628315616cf267060d5",
    measurementId: "G-GDZRW908C5"
  
  };

  const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;