import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'




function App() {
  return (
   
    <Router>
        
        <Routes>

            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            
        </Routes>

        
    </Router>

  );
}

export default App;
