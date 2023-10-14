import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
<<<<<<< HEAD:src/App.js
import Consultation from './pages/Сonsultation';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
=======
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
>>>>>>> d029fed1f618ff681d86fce65c96291f975179bd:frontend/src/App.js

function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar/>
<<<<<<< HEAD:src/App.js
         <Routes>
        <Route path="/" exact component={Home}/>
        <Route path="/consultation" exact component={Consultation}/>
        </Routes> 
=======
        <Routes>
        <Route path="/" exact component={Home}/>
        </Routes>
>>>>>>> d029fed1f618ff681d86fce65c96291f975179bd:frontend/src/App.js
      </Router>
   </div>
  );
}

export default App;
