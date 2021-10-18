import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBRl7LCaf_vrZkWTfZplncFl5qdBxtDdpU',
  authDomain: 'hashandgo.firebaseapp.com',
  projectId: 'hashandgo',
  storageBucket: 'hashandgo.appspot.com',
  messagingSenderId: '1011661433193',
  appId: '1:1011661433193:web:ff907eb179a62d1f15f5f8',
};

// Initialize Firebase
const database = firebase.initializeApp(firebaseConfig);

export default database;
