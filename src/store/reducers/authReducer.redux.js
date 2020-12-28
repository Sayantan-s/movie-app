import { LOGIN_ERROR, LOGIN_SUCCESSFULL, LOGIN_WITH_FB_FAILED, LOGIN_WITH_FB_SUCCESSFULL, LOGIN_WITH_GOOGLE_FAILED, LOGIN_WITH_GOOGLE_SUCCESSFULL, LOGOUT_SUCCESSFULL, SIGNUP_FAILED, SIGNUP_SUCCESSFULL, TOAST_REMOVER } from "../action.redux";

const initialState = {
   authError : null,
   toastAlert : null,
};

const authReducer = (state = initialState,action) => {

    switch (action.type){
        case LOGIN_ERROR : 
            //console.log('Login error!')
            return {
                ...state,
                authError : action.err.message,
            }
        case LOGIN_SUCCESSFULL : 
        //console.log('Login successfull')
            return {
                ...state,
                authError : null,
          
            }
        case LOGOUT_SUCCESSFULL : 
            return {
                ...state,
                authError : null,
            
            }
        case SIGNUP_SUCCESSFULL : 
            console.log('SignedUp!')
            return{
                ...state,
                authError : null,
    
            }
        case SIGNUP_FAILED : 
            console.log('Signup failed!')
            return {
                ...state,
                authError : action.err.message,
             
            }
        case LOGIN_WITH_GOOGLE_SUCCESSFULL :
            console.log('LoggedIn Google')
                return {
                    ...state,
                    authError: null,
        
                }
        case LOGIN_WITH_GOOGLE_FAILED :
            console.log('LoggedIn Google failed')
            return{
                ...state,
                authError : action.err.message,
            }

        case LOGIN_WITH_FB_SUCCESSFULL :
            console.log('LoggedIn FB')
            return {
                ...state,
                authError: null,
    
            }
        case LOGIN_WITH_FB_FAILED :
                console.log('LoggedIn FB failed')
                return{
                    ...state,
                    authError : action.err.message,
                }
    
        case TOAST_REMOVER : 
            return {
                ...state,
                authError : null
            }
        default : return state;
    }
}

export default authReducer;