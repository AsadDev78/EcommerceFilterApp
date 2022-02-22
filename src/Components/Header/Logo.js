import React from "react";
import {
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
class Logo extends React.Component {
  render() {
    return (
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
      
        <Nav.Link><Link to="/" style={{textDecoration:'none',color:'#fff'}}>Home</Link></Nav.Link>
      
        <Nav.Link style={{color:'#fff'}}>Link</Nav.Link>
        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item >Action</NavDropdown.Item>
          <NavDropdown.Item >Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link href="#" disabled style={{color:'#fff'}}>
          Link
        </Nav.Link>
      </Nav>
    );
  }
}
export default Logo;
