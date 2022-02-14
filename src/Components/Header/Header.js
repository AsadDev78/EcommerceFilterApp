import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import "./HeaderStyle.css";
import { Container, Navbar } from "react-bootstrap";
import LoginSignup from "./LoginSignup";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="success" expand="md" style={{color:'white'}}>
        <Container fluid>
          <Navbar.Brand href="#" >Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Logo />
            <div className="d-flex">
            <SearchBar SearchBar={this.props.SearchBar} />
            <LoginSignup />
            </div>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default Header;

// <div className='header'>
//     <Logo/>
//     <SearchBar SearchBar={this.props.SearchBar}/>

// </div>
