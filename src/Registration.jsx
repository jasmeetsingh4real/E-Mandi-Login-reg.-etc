import React from 'react';
import './login.css';
import {Link} from 'react-router-dom';

function Registration(){
    return(
        <div className='loginPage'>
        <h1 className="Lheading">
                Registration Page
            </h1>
        <form className='registration' action="/" method="post">
            <input type='text' placeholder='First Name' className="Log_input" /><br/>
            <input type='text' placeholder='Last Name' className="Log_input" /><br/>
            <input type='text' placeholder='Phone' required className="Log_input" /><br/>
            <input type='text' placeholder='State' className="Log_input" /><br/>
            <input type='text' placeholder='Username' className="Log_input" /><br/>
            <input type='password' placeholder='password' className="Log_input" /><br/>
            <Link to="/">
            <button className="log_button"  >
                Register
            </button><br/>
            </Link>
        </form>
        </div>
    )
}
export default Registration;