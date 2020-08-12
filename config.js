import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyB5KSg207n1GIPBZUE8TqfkgBt8Jz3YUZE",
  authDomain: "bed-time-stories-714af.firebaseapp.com",
  databaseURL: "https://bed-time-stories-714af.firebaseio.com",
  projectId: "bed-time-stories-714af",
  storageBucket: "bed-time-stories-714af.appspot.com",
  messagingSenderId: "790948921152",
  appId: "1:790948921152:web:b3e1acc482bfabd09844a5"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()      