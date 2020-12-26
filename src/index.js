import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux';
import store, { rrfProps } from './store/store.redux';
import { ReactReduxFirebaseProvider,isLoaded } from 'react-redux-firebase';

const AuthisLoaded = ({ children }) => {
   const auth = useSelector((state) => state.firebase.auth);   if
   (!isLoaded(auth))
      return (
         <div>
            Loading....
         </div>
      );   
return children;
}

ReactDOM.render(
 <BrowserRouter>
    <Provider store={store}>
     <ReactReduxFirebaseProvider {...rrfProps}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
     </ReactReduxFirebaseProvider>
    </Provider>
 </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
