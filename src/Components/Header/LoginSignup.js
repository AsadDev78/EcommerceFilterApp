import React from "react";
import { Badge } from "react-bootstrap";
import { FaShoppingCart, FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";
class LoginSignup extends React.Component {
  render() {
    // {this.props.CartProducts.length()}
    return (
      <div style={{ marginTop: "4px" }}>
        <Link to="/Login" style={{ textDecoration: "none", color: "#fff" }}>
          <FaUserLock size={24} style={{ margin: "0px 10px" }} />
          
        </Link>
        {/* <Link to="/Signup" style={{ textDecoration: "none", color: "#fff" }}>

        <FaUserCheck size={24} style={{ margin: "0px 10px" }} /> SignUp
        </Link> */}
        <Link to="/cart" style={{ textDecoration: "none", color: "#fff" }}>
          <FaShoppingCart size={24} />
          {this.props.qty > 0 ? (
            <sup><Badge bg="light" text="dark">{this.props.qty}</Badge></sup>
            /* <sup className="super"></sup> */
          ) : (
            ""
          )}
          
        </Link>
      </div>
    );
  }
}
export default LoginSignup;
