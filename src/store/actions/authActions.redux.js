import { LOGIN_ERROR, LOGIN_SUCESSFUL } from "../action.redux";

export const LogIn = (credentials) => {
    return (dispatch,getState,{ getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(_ => {
            dispatch({ type : LOGIN_SUCESSFUL })
        }).catch(err => {
            dispatch({ type : LOGIN_ERROR,err })
        })
    }
}