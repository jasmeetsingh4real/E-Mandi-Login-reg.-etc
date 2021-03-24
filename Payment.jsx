import React from 'react';

import './payment_design.css';
const Payment=()=>{

    return(
      <div>
        <h1 className="H1">
            Payment
        </h1>
            <div className="payDiv">
                <h2>
                Total: ₹XX
                </h2>
                <ul>
  <li>
    <input type="radio" id="f-option" name="selector"/>
    <label for="f-option">PayPal</label>
    
    <div class="check"></div>
  </li>
  
  <li>
    <input type="radio" id="s-option" name="selector"/>
    <label for="s-option">Net-Banking</label>
    
    <div class="check"><div class="inside"></div></div>
  </li>
  
  <li>
    <input type="radio" id="t-option" name="selector"/>
    <label for="t-option">Card</label>
    
    <div class="check"><div class="inside"></div></div>
  </li>
</ul>
                <button className="proceedButton">Proceed
                </button>
            </div>
           
            </div>
    )
}
export default Payment;