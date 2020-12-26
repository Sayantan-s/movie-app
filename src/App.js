import './App.css';
import Navbar from './components/Navbar.component';
import Auth from './pages/Auth';
import  { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar.component';
import styled from 'styled-components';
import Toasts from './utils/Toasts.component';
import { useSelector } from 'react-redux';
import { DangerToast } from './utils/Icons'

function App() {

  const { auth : { authError } } = useSelector(state => state); 

  console.log(authError);

  return (
    <AppContainer>
      <Sidebar />
      <DashboardContainer>
          <Navbar />
            <Switch>
              <Route path="/auth" component={Auth} />
            </Switch>
      </DashboardContainer>
     {
       authError &&  <Toasts 
       Icon={DangerToast} 
       toastText = {authError}
       extraText={'Wrong credentials!'}
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