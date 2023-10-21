import React from "react";
import './navbar.styles.css';
import { Link } from 'react-router-dom';

const Navbar=({ darkTheme, darkText})=>{
    
    return(
        <section className='navbar-container' >
            <div className="container flex justify-between align-center">
                <a href="a" className="logo">IZDE</a>

                <nav className="nav-links-container">
                    <Link to="/" className='nav-links'>Home</Link>
                    <Link to="/consultation" className='nav-links'>Consultation</Link>
                    <Link to="/profile" className='nav-links'>Profile</Link>
                    <Link to="/signin" className='nav-links'>Sign Out</Link>
                </nav>
            </div>
        </section>
    )
}

export default Navbar