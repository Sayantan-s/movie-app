import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore'
import authReducer from "./reducers/authReducer.redux";
import orderReducerRedux from "./reducers/orderReducer.redux";

const rootReducer = combineReducers({
    auth : authReducer,
    order: orderReducerRedux,
    firestore : firestoreReducer,
    firebase : firebaseReducer
})

export default rootReducer;