import React from 'react';
import {Link} from 'react-router-dom';
const fptextstyle={
    color:"white"
};
const fptext={
    color:"black"
};

function Fp(){
    return(
        <div className="loginPage">
        <form>
            <h1 className="Lheading">
                Forgot Password?
            </h1><span className='elink'>
            Enter your phone number<br/>
            <input type='text' className="Log_input" /><br/>
            Enter OTP<br/></span>
            <input type="text" className="Log_input" /><br/>
            <Link to="/newpass"  style={fptextstyle}>
            <button className="log_button">
                Verify
            </button>
            </Link>
           
            
        </form>
        </div>
    )
}

export default Fp;