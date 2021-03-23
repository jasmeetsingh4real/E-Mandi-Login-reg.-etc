import React from 'react';
import {Link} from 'react-router-dom';

function NewPass(){
    return(
        <div className="loginPage">
            <form>
                <h1 classNmae='Lheading'>
                    Create Password
                </h1><span className="elink">
                Enter your new Password<br/>
                <input type="text" className="Log_input" /><br/>
                Confirm your new Password<br/></span>
                <input type="text" className="Log_input" /><br/>
                <Link to="/">
                <button className="log_button">Proceed</button>
                </Link>
            </form>
        </div>
    )
}

export default NewPass;