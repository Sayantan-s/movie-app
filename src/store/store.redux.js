/*import { applyMiddleware, createStore,compose } from "redux";
import logger from 'redux-logger'
import rootReducer from "./rootReducer.redux";
import thunk from 'redux-thunk'
import { getFirestore,reduxFirestore } from 'redux-firestore'
import { getFirebase,createFirebaseInstance } from 'react-redux-firebase'
import firebaseUtils from '../firebase.config'

const middlewares = [ logger,thunk.withExtraArgument({ getFirebase,getFirestore }) ];

const store = createStore(rootReducer,compose(
    applyMiddleware(...middlewares),
    reduxFirestore(firebaseUtils),
));

const rrfProps = {
    firebaseUtils,
    config : '',
    dispatch : store.dispatch,
    createFirebaseInstance
}

export default { store,rrfProps };*/
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore,compose, applyMiddleware } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore
import rootReducer from "./rootReducer.redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
 
const firebaseConfig = {
    apiKey: "AIzaSyBLhMBEMVriTeHmOlTkhFcWGyJFFv4FVZE",
    authDomain: "movie-app-1eaef.firebaseapp.com",
    projectId: "movie-app-1eaef",
    storageBucket: "movie-app-1eaef.appspot.com",
    messagingSenderId: "236134169054",
    appId: "1:236134169054:web:8b3e253b690afa8323054f",
    measurementId: "G-QL35C0B92B"
  };

firebase.initializeApp(firebaseConfig)
 
// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
 
// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable
 
// Create store with reducers and initial state
const initialState = {}
const store = createStore(rootReducer, initialState,composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({  }))
))
 
export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch, // <- needed if using firestore
  createFirestoreInstance
}

export default store