import React from "react";
import { FaShoppingCart, FaUserLock } from "react-icons/fa";
import { Link } from "react-router-dom";
class LoginSignup extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "4px" }}>
        <Link to="/Login" style={{ textDecoration: "none", color: "#fff" }}>
          <FaUserLock size={24} style={{ margin: "0px 10px" }} />
          SignIn
        </Link>
        {/* <Link to="/Signup" style={{ textDecoration: "none", color: "#fff" }}>

        <FaUserCheck size={24} style={{ margin: "0px 10px" }} /> SignUp
        </Link> */}
        <Link to="/Login" style={{ textDecoration: "none", color: "#fff" }}>

        <FaShoppingCart size={24}style={{ margin: "0px 10px" }} /> Cart
        </Link>
      </div>
    );
  }
}
export default LoginSignup;
