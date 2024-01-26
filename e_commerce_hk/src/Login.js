import React, { useState } from 'react'
import "./Login.css";
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import {auth} from "./firebase";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail]=useState('');
    const [password, setPassword]= useState('');

    const signIn= e =>{
        e.preventDefault();
        // firebase stuff
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            // console.log("in");
            const user = userCredential.user;
            navigate("/")
            // console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    }

    const register = async (e)=>{
        e.preventDefault();
        // firebase stuff
        await createUserWithEmailAndPassword(auth,email,password).then((auth)=> {
            if(auth){
                navigate('/home'); // Navigates to the '/home' route
            }
        }).catch(error=> alert(error.message));
        // console.log(auth);

    }

  return (
    <div className='login' >
        <NavLink to="/">
            <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'/>
        </NavLink>

        <div className='login_container'>
            <h1>Sign-in</h1>

            <form>
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)}></input>

            <h5>Password</h5>
            <input type='password' value={password} onChange={e=> setPassword(e.target.value)} />

            <button type='submit' onClick={signIn} className='login_signInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the AMAZON CLONE Condition of Use & Sale.
                Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <button onClick={register} className='login_registerButton'>
                Create Your Amazon Account
            </button>
        </div>
    </div>
  )
}

export default Login;