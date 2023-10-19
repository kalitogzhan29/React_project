import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Consultation from './pages/Сonsultation';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar/>
         <Routes>
        <Route path="/" exact component={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/consultation" element={<Consultation/>}/>
        </Routes> 
      </Router>
   </div>
  );
}

export default App;
