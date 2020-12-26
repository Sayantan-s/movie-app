import { LOGIN_ERROR, LOGIN_SUCCESSFULL } from "../action.redux";

const initialState = {
   authError : null,
   isAuthenticated : false
};

const authReducer = (state = initialState,action) => {

    switch (action.type){
        case LOGIN_ERROR : 
            //console.log('Login error!')
            return {
                ...state,
                authError : 'Login failed!'
            }
        case LOGIN_SUCCESSFULL : 
        //console.log('Login successfull')
            return {
                ...state,
                authError : null
            }
        default : return state;
    }
}

export default authReducer;