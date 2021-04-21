import React from 'react'
import {
   Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../utorrent.png'
import '../bootstrap.min-one.css'
import { Nav, Navbar } from 'react-bootstrap';
// import '../sctipt'



const NavBar = () => {
   return (
      <>
         <Navbar bg="dark" varient="dark" sticky="top" expand="md" collapseOnSelect>
            <Navbar.Brand>
               <img src={logo} alt="logo" width="40px" height="40px" />
               <Link to="/">
                  <span className="p-2 text-success"><strong className="brand-name">MovieZone</strong></span>
               </Link>

            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
               <Nav>
                  <Nav.Link>
                     <Link to="/">Home
                        <span className="sr-only">(current)</span>
                     </Link>

                  </Nav.Link>
                  <Nav.Link>
                     <Link to="/latest-movies">Latest Movies</Link>
                  </Nav.Link>
                  <Nav.Link>
                     <Link to="/popular-movies">Popular Movies</Link>
                  </Nav.Link>
                  <Nav.Link>
                     <Link to="/last-added-movies">Last Added Movies</Link>
                  </Nav.Link>
                  <Nav.Link>
                     <Link to="/contact">Contact Me</Link>
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </>

   )
}

export default NavBar
