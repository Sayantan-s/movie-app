import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import  'firebase/database'
import { createStore,applyMiddleware } from 'redux'
import { getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance,getFirestore, reduxFirestore } from 'redux-firestore'
import rootReducer from "./rootReducer.redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
 
const firebaseConfig = {
  apiKey: "AIzaSyBLhMBEMVriTeHmOlTkhFcWGyJFFv4FVZE",
  authDomain: "movie-app-1eaef.firebaseapp.com",
  projectId: "movie-app-1eaef",
  storageBucket: "movie-app-1eaef.appspot.com",
  messagingSenderId: "236134169054",
  appId: "1:236134169054:web:8c125a9bd2f6650c23054f",
  measurementId: "G-R7JKE0GQ8Y"
  };

firebase.initializeApp(firebaseConfig)
 
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  presence: 'presence',
  sessions: 'sessions'
}

firebase.firestore() 

const initialState = {}
const store = createStore(rootReducer,initialState,composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase,getFirestore })),
    reduxFirestore(firebase)
))
 
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

export default store


/* apiKey: "AIzaSyBLhMBEMVriTeHmOlTkhFcWGyJFFv4FVZE",
  authDomain: "movie-app-1eaef.firebaseapp.com",
  projectId: "movie-app-1eaef",
  storageBucket: "movie-app-1eaef.appspot.com",
  messagingSenderId: "236134169054",
  appId: "1:236134169054:web:406a9ab94a2a323223054f",
  measurementId: "G-7KMFZ482ML" */