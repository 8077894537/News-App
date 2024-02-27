import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { ImNewspaper } from "react-icons/im";
import { RiHomeSmileFill } from "react-icons/ri";
import { MdOutlineSportsCricket } from "react-icons/md";
import { IoBusiness } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { SiRotaryinternational } from "react-icons/si";
function Menu() {
  let data = {
    marginLeft: "30px"
  }
  let data2 = {
    marginLeft: "30px"
  }
  let data3 = {
    color: "#2C3A47",
    fontSize: "30px"
  }
  return (
    <>

      <Navbar expand="lg" className="" style={{ background: "#81ecec", padding: "15px", width: "100%",  }}>
        <Container>
          <Navbar.Brand style={{ ...data3, fontWeight: "bolder", marginTop: "9px" }} to="/Home"><ImNewspaper style={{margin:"8px",}} />NEWS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link style={{ ...data, textDecoration: "none", color: "#636e72", marginTop: "9px" }} to="/"><RiHomeSmileFill />Home</Link>
              <Link style={{ ...data2, textDecoration: "none", color: "#636e72", marginTop: "9px" }} to="/cricket"><MdOutlineSportsCricket />Cricket</Link>
              <Link style={{ ...data2, textDecoration: "none", color: "#636e72", marginTop: "9px" }} to="/business"><IoBusiness />Business</Link>
              <Link style={{ ...data2, textDecoration: "none", color: "#636e72", marginTop: "9px" }} to="/technology"><GrTechnology />Technology</Link>
              <Link style={{ ...data2, textDecoration: "none", color: "#636e72", marginTop: "9px" }} to="/international"><SiRotaryinternational />International</Link>

              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;