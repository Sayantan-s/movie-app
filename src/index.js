import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux';
import store, { rrfProps } from './store/store.redux';
import { ReactReduxFirebaseProvider,isLoaded } from 'react-redux-firebase';
import Spinner from './utils/Spinner.component';
import styled from 'styled-components';
//import styled from 'styled-components';
const LoadingState = styled.div`
position:fixed;
top: 0;
left: 0;
z-index : 10000;
height : 100vh;
width : 100%;
display: flex;
justify-content: center;
align-items: center;
`

const AuthisLoaded = ({ children }) => {
   const auth = useSelector((state) => state.firebase.auth);   
   if(!isLoaded(auth))
      return (
       <LoadingState>
            <Spinner fill="#F46C3F"/>
       </LoadingState>
      );   
   return children;
}

ReactDOM.render(
 <BrowserRouter>
    <Provider store={store}>
     <ReactReduxFirebaseProvider {...rrfProps}>
        <React.StrictMode>
         <AuthisLoaded>
            <App />
         </AuthisLoaded>
        </React.StrictMode>
     </ReactReduxFirebaseProvider>
    </Provider>
 </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();


