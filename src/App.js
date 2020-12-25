import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar.component';
import Input from './components/ui/Input.component';
import SignUp from './pages/SignUp';
import { Search } from './utils/Icons';

function App() {

  //const state = useSelector(state => state);

 // console.log(state);

  return (
    <div className="App">
      {/*<SignUp />*/}

      <Navbar />
      <SignUp />
    </div>
  );
}

export default App;
