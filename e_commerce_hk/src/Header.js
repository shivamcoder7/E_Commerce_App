import React from "react";
import ReactDOM from "react-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./Header.css";
import {NavLink} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
// import { Link } from "react-router-dom";

function Header(){

    const [{basket, user}, dispatch]= useStateValue();

    function handleAuthentication(){
        if(user){
            signOut(auth);
        }
    }

    return(
        <div className="header">
        <NavLink to="/">
        <img className="header_logo" 
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </NavLink>

    <div className="header_search">
        <input className="header_searchinput" placeholder="Search Amazon" type="text"/>
        <SearchIcon className="header_searchicon" />
    </div>
    <div onClick={handleAuthentication} className="header_nav">
    <NavLink to={!user && "/login"}>
        <div className="header_option">
        <span className="header_optionOne">Hello {user?.email}</span>
        <span className="header_optionTwo">{user?'Sign out' : 'Sign in'}</span>
        </div>
    </NavLink>    

        <div className="header_option">
            <span className="header_optionOne">Returns</span>
            <span className="header_optionTwo">& Orders</span>
        </div>

        <div className="header_option">
            <span className="header_optionOne">Your</span>
            <span className="header_optionTwo">Prime</span>
        </div>
    </div>
    <NavLink to="/checkout">
        <div className="header_basketOption" >
        <ShoppingBasketIcon/>
        <span className="header_optionTwo header_basketCount">{basket?.length}</span>
        </div>
    </NavLink>
    

    </div>
    )
}

export default Header;