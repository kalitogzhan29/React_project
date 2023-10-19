import './App.css';
import{ NavBar } from "./components/NavBar";
import Home from './pages/Home';
<<<<<<< HEAD
// import Consultation from './pages/Сonsultation';
=======
import Profile from './pages/Profile';
import Consultation from './pages/Сonsultation';
>>>>>>> 894c6c246f747e08b6e6fbf380a7b12547994310
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <Router>
        <NavBar/>
         <Routes>
<<<<<<< HEAD
        <Route path="/" exact component={Home}/>
        {/* <Route path="/consultation" exact component={Consultation}/> */}
=======
        <Route path="/" exact component={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/consultation" element={<Consultation/>}/>
>>>>>>> 894c6c246f747e08b6e6fbf380a7b12547994310
        </Routes> 
      </Router>
   </div>
  );
}

export default App;
