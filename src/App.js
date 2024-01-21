import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'




function App() {
  return (
   
    <Router>
        
        <Routes>
          
            <Route path="/" element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            
        </Routes>

        
    </Router>

  );
}

export default App;
