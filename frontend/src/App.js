import './App.css';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Consultation from './pages/Сonsultation';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar/>
         <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/consultation" element={<Consultation/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        </Routes> 
       {/* <Footer/> */}
      </Router>
   </div>
  );
}

export default App;
