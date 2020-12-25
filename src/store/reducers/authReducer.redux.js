import { LOGIN_ERROR, LOGIN_SUCESSFUL } from "../action.redux";

const initialState = {
   authError : null
};

const authReducer = (state = initialState,action) => {

    switch (action.type){
        case LOGIN_ERROR : 
            console.log('Login error!')
            return {
                ...state,
                authError : 'Login failed!'
            }
        case LOGIN_SUCESSFUL : 
            return {
                ...state
            }
        default : 
        return state;
    }
}

export default authReducer;