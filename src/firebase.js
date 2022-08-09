import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD5i-XZyp3p8HSBfR5VIKHollhQVoklcaw",
  authDomain: "yt-clone-55e13.firebaseapp.com",
  projectId: "yt-clone-55e13",
  storageBucket: "yt-clone-55e13.appspot.com",
  messagingSenderId: "389237836866",
  appId: "1:389237836866:web:03660c6b83cae4c5b1b1db"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)



export default firebase.auth()