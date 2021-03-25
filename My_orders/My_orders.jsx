import React from 'react';
import './orders_style.css';
const My_orders =()=>{
    const button_style={
            float: "right"
    }
    return(
    <>
        <h1 className="orders_H1">My Orders(*no. of orders*)</h1>
            <div className="mainDiv">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYqsf3U2KzG9EG6ntkIlswF3Tz6zLm5PxIw&usqp=CAU" id="prod_img"/>
                <h2 id="prod_name">Lassan</h2>
                <h3 id="prod_price">Price:</h3>
                <form>
                 Qty: <input className="prod_qty"/>
                </form>
                <button style={button_style} className="mainButton">Details</button>
            </div>
            <div className="mainDiv">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYqsf3U2KzG9EG6ntkIlswF3Tz6zLm5PxIw&usqp=CAU" id="prod_img"/>
                <h2 id="prod_name">Lassan</h2>
                <h3 id="prod_price">Price:</h3>
                <form>
                 Qty: <input className="prod_qty"/>
                </form>
                <button style={button_style} className="mainButton">Details</button>
            </div>

            <div className="mainDiv">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYqsf3U2KzG9EG6ntkIlswF3Tz6zLm5PxIw&usqp=CAU" id="prod_img"/>
                <h2 id="prod_name">Lassan</h2>
                <h3 id="prod_price">Price:</h3>
                <form>
                 Qty: <input className="prod_qty"/>
                </form>
                <button style={button_style} className="mainButton">Details</button>
            </div>



    </>
    )
};
export default My_orders;