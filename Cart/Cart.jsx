import React from 'react';
import '../My_orders/orders_style.css';
const Cart=()=>{
    const h2_style={float:"left"}
     const remove_button={
         float:"right"
     }
   
    return(
        <>
        <h1 className="orders_H1">
            Cart(1)
        </h1>
        <div className="mainDiv">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYqsf3U2KzG9EG6ntkIlswF3Tz6zLm5PxIw&usqp=CAU" id="prod_img"/>
                <h2 id="prod_name">Lassan</h2>
                <h3 id="prod_price">Price:</h3>
                <form>
                 Qty: <input className="prod_qty"/>
                </form>
                <button style={remove_button} className="mainButton">Remove</button>
            </div>

            
            <div className="cart_total">
                <h2 style={h2_style}>
                    Total:₹XXX
                </h2>
                <button className="buy_button">Proceed To Buy</button>
            </div>
        </>
    )
}
export default Cart;