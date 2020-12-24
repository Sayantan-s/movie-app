import { firebaseReducer, firestoreReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer.redux";

const rootReducer = combineReducers({
    auth : authReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})

export default rootReducer;