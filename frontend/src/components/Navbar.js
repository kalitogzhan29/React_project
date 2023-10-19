// import React from 'react'
// import Logo from '../assets/book_logo.png'
// import {Link} from 'react-router-dom'
// import '../styles/Navbar.css'

// function Navbar() {
//   return (
//     <div className='navbar'>
//         <div>
//             <div className='leftSide'>
//                 <img src={Logo}/>
                
//             </div>
//             <div className='rightSide'>
//                 <Link to="/">Home</Link>
//                 <Link to="/menu">Menu</Link>
//                 <Link to="/about">About</Link>
//                 <Link to="/contact">Contact</Link>
                
//             </div>
//         </div>
      
//     </div>
//   );
// }

// export default Navbar


// import { useState, useEffect } from "react";
// import { Navbar, Container} from "react-bootstrap";
// // import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';

// export const NavBar = () => {
//   const[activeLink, setActiveLink] = useState('home');
//   const[scrolled, sescrolled] = useState(false);
//   useEffect(() => {
//     const onScroll = () =>{
//       if(window.scrollY>50){
//         sescrolled(true);
//       }else sescrolled(false);
//     }

//    /* global addEventListener */

// // Your code here
// addEventListener("scroll", onScroll);
// return () => window.removeEventListener("scroll", onScroll);

//   }, [])
  
//   return(
//     // import Container from 'react-bootstrap/Container';
//     // import Nav from 'react-bootstrap/Nav';
//     // import Navbar from 'react-bootstrap/Navbar';


// function NavBar() {
//   return (
//     <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
//       <Container>
//         <Navbar.Brand href="#home">
//           <img src={''} alt="Logo"/>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <span className="navbar-toggler-icon"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#consultation">Consultation</Nav.Link>
//             <Nav.Link href="#register">Register</Nav.Link>
//           </Nav>
//           <span className="navbar-text">
//             <div className="social-icon">
//               <a href="#"><img src={''} alt=""/></a>
//               <a href="#"><img src={''} alt=""/></a>
//               <a href="#"><img src={''} alt=""/></a>
//             </div>
//             <button className="button" onClick={() => console.log('connect')}>
//               <span>Let's connect</span>
//             </button>
//           </span>

//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }


// )
// }
// export default NavBar

<<<<<<< HEAD
// import React, { useState, useEffect } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";

// export const NavBar = () => {
//   const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     }

//     // Add and remove event listener on mount and unmount
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
//       <Container>
//         <Navbar.Brand href="#home">
//           <img src={''} alt="Logo"/>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <span className="navbar-toggler-icon"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="home">Home</Nav.Link>
//             <Nav.Link href="consultation">Consultation</Nav.Link>
//             <Nav.Link href="register">Register</Nav.Link>
//           </Nav>
//           <span className="navbar-text">
//             <div className="social-icon">
//               <a href="#"><img src={''} alt=""/></a>
//               <a href="#"><img src={''} alt=""/></a>
//               <a href="#"><img src={''} alt=""/></a>
//             </div>
//             <button className="button" onClick={() => console.log('connect')}>
//               <span>Let's connect</span>
//             </button>
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }


import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/book_logo.png";

import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
=======
// Arudyn Navbaryyy

// import React, { useState, useEffect } from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
>>>>>>> 894c6c246f747e08b6e6fbf380a7b12547994310

// export const NavBar = () => {
//   const [activeLink, setActiveLink] = useState('home');
//   const [scrolled, setScrolled] = useState(false);

<<<<<<< HEAD
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {/* <a href="#"><img src={navIcon1} alt="" /></a> */}
                {/* <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon1} alt="" /></a> */}
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
} 
=======
//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     }

//     // Add and remove event listener on mount and unmount
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
//       <Container>
//         <Navbar.Brand href="#home">
//           <img src={''} alt="Logo"/>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <span className="navbar-toggler-icon"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="home">Home</Nav.Link>
//             <Nav.Link href="consultation">Consultation</Nav.Link>
//             <Nav.Link href="register">Register</Nav.Link>
//           </Nav>
//           <span className="navbar-text">
//             <div className="social-icon">
//               <a href="#"><img src={''} alt=""/></a>
//               <a href="#"><img src={''} alt=""/></a>
//               <a href="#"><img src={''} alt=""/></a>
//             </div>
//             <button className="button" onClick={() => console.log('connect')}>
//               <span>Let's connect</span>
//             </button>
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

      
import React from "react";
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar=({ darkTheme, darkText})=>{
    
    return(
        <section className={darkTheme? 'background-dark relative' + ' navbar-container' : 'background-transparent' + ' navbar-container'}>
            <div className="container flex justify-between align-center">
                <a href="a" className="logo">IZDE<span className="text-primary">Store</span></a>

                <nav className="nav-links-container">
                    <Link to="/" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Home</Link>
                    <Link to="/consultation" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Consultation</Link>
                    <Link to="/register" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Register</Link>
                    <Link to="/profile" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Profile</Link>
                </nav>
            </div>
        </section>
    )
}

export default Navbar
>>>>>>> 894c6c246f747e08b6e6fbf380a7b12547994310
