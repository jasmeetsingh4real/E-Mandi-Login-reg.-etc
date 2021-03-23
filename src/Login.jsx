import React from "react";

import './login.css';
import {Link} from 'react-router-dom';




function Login(){return(
    <div className='loginPage'>
    <form className='login' action="/" method="post">
        <h1 className="Lheading">
            Login To E-Mandi
        </h1>
        <input type='text' placeholder='username' className="Log_input" /><br/>
        <input type='password' placeholder='password' className="Log_input" /><br/>
        
        <button className="log_button">
       
            Login
            
        </button><br/>
        
        <Link className="elink" to="/fp">
            forgot password?
        </Link><br/>
        <Link className="elink" to='/reg'>
            don't have an account?
        </Link>
    </form>
    </div>)}

    export default Login;