import React from "react";
import { FaShoppingCart, FaUserCheck, FaUserLock } from "react-icons/fa"
class LoginSignup extends React.Component {
    render(){
        return(
            
            <div style={{marginTop:'4px'}}>

            <FaUserLock size={24} style={{margin:'0px 10px'}}/>Login || <FaUserCheck size={24}/> SignUp  ||  <FaShoppingCart size={24}/>Cart
            </div>
            
        )
    }
}
export default LoginSignup