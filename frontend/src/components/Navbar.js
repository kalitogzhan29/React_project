import React from "react";
import './navbar.styles.css';

import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar=()=>{
    
    return(
        // <section className={darkTheme? 'background-dark relative'+  ' navbar-container'}>
        //     <div className="container flex justify-between align-center">
        //         <a href="a" className="logo">IZDE</a>

        //         <nav className="nav-links-container">
        //             <Link to="/" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Home</Link>
        //             <Link to="/consultation" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Consultation</Link>
        //             <Link to="/profile" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Profile</Link>
        //             <Link to="/signin" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Sign Out</Link>
        //         </nav>
        //     </div>
        // </section>
        
           
              <nav className="nav">
                <Link to="/" className="site-title">
                 IZDE
                </Link>
                <ul>
                    <CustomLink to="/">Home</CustomLink>
                  <CustomLink to="/consultation">Consultation</CustomLink>
                  <CustomLink to="/profile">Profile</CustomLink>
                </ul>
              </nav>
            )
          }
          
          function CustomLink({ to, children, ...props }) {
            const resolvedPath = useResolvedPath(to)
            const isActive = useMatch({ path: resolvedPath.pathname, end: true })
          
            return (
              <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                  {children}
                </Link>
              </li>
            )
          }
    


export default Navbar