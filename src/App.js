import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Consultation from './pages/Сonsultation';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar/>
         <Routes>
        <Route path="/" exact component={Home}/>
        <Route path="/consultation" exact component={Consultation}/>
        </Routes> 
      </Router>
   </div>
  );
}

export default App;
