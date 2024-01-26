import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";    

function Checkout(){

    const [{basket,user}, dispatch]= useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left" >
                <img className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
                <div >
                    <h2>Hello, {user?.email}</h2>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                </div>
                {basket.map((item)=>
            (
              <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.price}/>
            ))}
            {/* <CheckoutProduct
            id='1234'
            title='This is a test'
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            price={12.96}
            rating={5}/>
            <CheckoutProduct
            id='1234'
            title='This is a test'
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            price={12.96}
            rating={5}/> */}
            </div>
            {/* Hare Krishna */}
        
            <div className="checkout_right">
                <Subtotal price="100" num="1"/>
            </div>
        </div>
    );
}

export default Checkout;