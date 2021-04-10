import React from 'react';
import dpi from './dpi.png';
import './Add_prod_design.css';

const Add_prod =()=>{

    return(
        
    <>
      <h1 className='heading'>ADD Product</h1>
        
    <form className='form-horizontal'>
      
        <div className='prod_image'>
        <img  src={dpi} alt='no pic'/>
        <h3>Upload Pictures</h3>
 
        </div>
        
        <div className="details">
        <label>Product Name:</label>
        <input type='text' />
  

        <label>Quantity:</label>
        <input placeholder="XXXX" type='text' className='prod_qty'/>

        <br/>

        <label>Set Price:</label><input type='text'/>
            
        <br/>
        <label className='description'>Description</label>
        <textarea className='desc_box'/><br/>

        <button type='submit' className="submit">ADD Product</button>
        </div>
    </form>
    </>)
}

export default Add_prod;