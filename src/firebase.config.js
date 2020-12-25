import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBLhMBEMVriTeHmOlTkhFcWGyJFFv4FVZE",
    authDomain: "movie-app-1eaef.firebaseapp.com",
    projectId: "movie-app-1eaef",
    storageBucket: "movie-app-1eaef.appspot.com",
    messagingSenderId: "236134169054",
    appId: "1:236134169054:web:8b3e253b690afa8323054f",
    measurementId: "G-QL35C0B92B"
  };

firebase.initializeApp(firebaseConfig);

//firebase.firestore().settings({ timeStampsInSnapShots : true })

export default firebase;