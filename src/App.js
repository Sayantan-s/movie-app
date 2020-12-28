import './App.css';
import Navbar from './components/Navbar.component';
import Auth from './pages/Auth';
import  { BrowserRouter as Router,Route,Link,Switch, Redirect } from 'react-router-dom';
import Sidebar from './components/Sidebar.component';
import styled from 'styled-components';
import Toasts from './utils/Toasts.component';
import { useDispatch, useSelector } from 'react-redux';
import { DangerToast } from './utils/Icons'
import React from 'react'
import { TOAST_REMOVER } from './store/action.redux';

function App() {

  const { auth : { authError } } = useSelector(state => state); 

  const state = useSelector(state => state)

  console.log(state);

  const dispatch = useDispatch();

  React.useEffect(() => {
   if(authError){
    setTimeout(() => {
      dispatch({ type : TOAST_REMOVER })
    },3000)
   }
  },[authError])

  return (
    <AppContainer>
      <Sidebar />
      <DashboardContainer>
          <Navbar />
            <Switch>
              <Route path="/auth" component={Auth} />
              <Route path="/*login*">
                <Redirect to="/auth/login" />
              </Route>
              <Route path="/*signup*">
                <Redirect to="/auth/signup" />
              </Route>
            </Switch>
      </DashboardContainer>
     {
       authError &&  <Toasts 
       Icon={DangerToast} 
       toastText = {authError}
       color={'rgba(254, 226, 226,1)'}
       bgColor={'#F24744'}
     />
     }
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.section`
display : flex;
width: 100vw;
height: 100vh;
position: relative;
`

const DashboardContainer = styled.div`
flex-basis: 85%;
`