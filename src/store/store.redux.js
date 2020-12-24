import { applyMiddleware, createStore,compose } from "redux";
import logger from 'redux-logger'
import rootReducer from "./rootReducer.redux";
import thunk from 'redux-thunk'
import { getFirestore,reduxFirestore } from 'redux-firestore'
import { getFirebase,reactReduxFirebase } from 'react-redux-firebase'

const middlewares = [ logger,thunk.withExtraArgument({ getFirebase,getFirestore }) ];

const store = createStore(rootReducer,compose(
    applyMiddleware(...middlewares),
    //reduxFirestore(),
    //reactReduxFirebase()
));

export default store;