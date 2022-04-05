
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import LogIn from './Components/LogIn.js';
import Home from './Components/Home';
import Navbars from './Components/Navbars';
import Errors from './Components/Error';
import Admin from './Components/Admin';
import AddStudents from './Components/AddStudents';
function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbars/>
    <Routes>
        
            <Route index element={<Home />}></Route>
          <Route path = "/login" element={<LogIn/>}></Route>
          <Route path = "/admin" element={<Admin/>}></Route>
          <Route path = "/addstudents" element={<AddStudents/>}></Route>
          <Route path = "*" element={<Errors/>}></Route>
          
          
          </Routes>
            
     
          </BrowserRouter>
    </div>
  );
}

export default App;
