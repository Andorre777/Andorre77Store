
// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyBGddXrnVuz5L-9R_fQ3ab_VeWDWESh3ZU",
  authDomain: "andorre77store.firebaseapp.com",
  databaseURL: "https://andorre77store.firebaseio.com",
  projectId: "andorre77store",
  storageBucket: "andorre77store.firebasestorage.app",
  messagingSenderId: "1081619107506",
  appId: "1:1081619107506:web:5365bb5174eb72060e43ab"
};

// On initialise Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();
