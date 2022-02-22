import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import "./HeaderStyle.css";
import { Container, Navbar } from "react-bootstrap";
import LoginSignup from "./LoginSignup";
import { Link } from "react-router-dom";
import ContextAPI from "../ContextApi/ContextAPI";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="success" expand="md" style={{color:'white'}}>
        <Container fluid>
        <Link to="/" style={{textDecoration:'none',color:'#fff'}}>

          <Navbar.Brand  style={{color:'#fff'}}>Brand Logo</Navbar.Brand>
        </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Logo />
            <div className="d-flex">
            <SearchBar  />
            <LoginSignup 
              CartProducts={this.context.CartProducts}
              qty={this.context.qty}
            />
            </div>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
Header.contextType = ContextAPI
export default Header;

// <div className='header'>
//     <Logo/>
//     <SearchBar SearchBar={this.props.SearchBar}/>

// </div>
