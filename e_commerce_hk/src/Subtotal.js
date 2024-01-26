import React from 'react';
import "./Subtotal.css";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';
// import Payment from './Payment.js';

function Subtotal() {

  const [{basket}, dispatch]=useStateValue();
  const navigate=useNavigate();
  

  return (
    <div className='subtotal'>
        <p>
            Subtotal ({basket.length} items): <strong> ${getBasketTotal(basket)} </strong>
        </p>
        <small className='subtotal_gift'>
            <input type="checkbox" />This order contains a gift
        </small>
        <button onClick={(e)=> navigate("/payment")} >Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal