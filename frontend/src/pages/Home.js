import React from 'react'
import "../styles/Home.css"
// import BannerImage from "../../assets/book_logo.png";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';



function Home() {
  return (<section>  
    <div className="home" >
      
      <div className="headerContainer">
        <h1> IZDE </h1>
        <p> Opportuity for you</p>
        <Link to="/consultation">
          <button> Contact us</button>
        </Link>
      </div>
      <img src='../assets/2.jpg'></img>
    </div>
{/* <Footer/> */}
</section>
  );
}
  

export default Home
