import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar.component';
import Auth from './pages/Auth';
import { Search } from './utils/Icons';
import  { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';

function App() {

  //const state = useSelector(state => state);

 // console.log(state);

  return (
    <div className="App">

      <Navbar />
      <Switch>
        <Route path="/auth" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
