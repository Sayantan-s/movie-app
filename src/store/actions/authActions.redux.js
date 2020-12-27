import { LOGIN_ERROR, LOGIN_SUCCESSFULL, LOGIN_WITH_GOOGLE_FAILED, LOGIN_WITH_GOOGLE_SUCCESSFULL, LOGOUT_SUCCESSFULL, SIGNUP_FAILED, SIGNUP_SUCCESSFULL } from "../action.redux";

export const LogIn = credentials => {
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

export const SignUpWithEmailPass = user => {
    return (dispatch, getState,{ getFirebase,getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            user.email,
            user.password
        ).then(res  => {
            return firestore.collection('users').doc(res.user.uid).set({
                fullname: user.name,
                email: user.email
            })
        })
        .then(_ => {
            dispatch({ type : SIGNUP_SUCCESSFULL })
        })
        .catch(err => {
            dispatch({ type : SIGNUP_FAILED,err })
        })
    }
}

export const SignUpWithGoogle = () => {
    return (dispatch,getState,{ getFirebase,getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        const google = firebase.auth.GoogleAuthProvider();
        firebase.auth.signInWithPopup(google)
            .then(res => {
                console.log(res)
                const token = res.credential.accessToken;
                const user = res.user;
                dispatch({ type : LOGIN_WITH_GOOGLE_SUCCESSFULL })
            })
            .catch(err => {
                console.log(err);
                dispatch({ type : LOGIN_WITH_GOOGLE_FAILED,err })
            })
    }
}