import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA6MT3BEzwIOR8WVN4jSj9iQFUcXv8Jr_U",
  authDomain: "guitar-ecommerce-7e0d3.firebaseapp.com",
  projectId: "guitar-ecommerce-7e0d3",
  storageBucket: "guitar-ecommerce-7e0d3.appspot.com",
  messagingSenderId: "765658676482",
  appId: "1:765658676482:web:4a1830fcc5d063339e161b"
};

firebase.initializeApp(firebaseConfig)

export default firebase