import { LOGIN_ERROR, LOGIN_SUCCESSFULL, LOGOUT_SUCCESSFULL } from "../action.redux";

export const LogIn = (credentials) => {
    return (dispatch,getState,{ getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(_ => {
            dispatch({ type : LOGIN_SUCCESSFULL })
        }).catch(err => {
            dispatch({ type : LOGIN_ERROR,err })
        })
    }
}

export const LogOut = _ => {
    return (dispatch, getState,{ getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut()
        .then(_ => {
            dispatch({ type : LOGOUT_SUCCESSFULL })
        })
    }
}