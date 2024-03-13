import './App.css';
import Header from "./Header.js";
import Home from './Home.js';
import Checkout from "./Checkout.js";
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Login.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './StateProvider.js';
// import firebase from 'firebase/app';
import 'firebase/auth';
import { auth } from './firebase.js';
import Payment from './Payment.js';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise=loadStripe("pk_test_51ORyyFSFt8DWQKdu1ZpIKzg7TEqf7tyJ1JNmUZAcvEiDhar2viYRhuDL7FxoKJwaCwlcHmQj2sCLBRD2uvM6KNFk001mKRmk8F");

function App() {

  const [state, dispatch ]= useStateValue();

  useEffect(()=>{
    // console.log("I am useEffect");
    onAuthStateChanged(auth, authUser=>{
      if(authUser){
        //user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        // user logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[])
  
  return (
    
    <Router>
    <div className="App">
    <Header/>

    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/payment" element={
      <Elements stripe={promise}>
      <Payment/>
      </Elements>
    } />
    <Route path="/" element={<Home />} />
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
