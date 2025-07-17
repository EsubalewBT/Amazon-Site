import React, { useState, useContext } from 'react'
import classes from './Auth.module.css'
import { Link } from 'react-router-dom';
import { auth } from '../../Component/Utilities/firebase'; 
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../../Component/DataProvider/DataProvider';
import { Type } from '../../Component/Utilities/action.type.js';
function Auth() {
const [{user:_}, dispatch] = useContext(DataContext);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
// const [error, setError] = useState(null);


const authHandler=(e)=>{
  e.preventDefault();
  if(e.target.name==='signIn'){
     signInWithEmailAndPassword(auth, email, password).then((userInfo) => {
      
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      });
     }).catch((error) => {
      console.error("Error signing in:", error);
     });
}else{
  createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {
      
      dispatch({
        type: Type.SET_USER,
        user: userInfo.user,
      });
  }).catch((error) => {
      console.error("Error creating account:", error);
  });
}

}
  return (
    <section className={classes.login}>
       <Link to="/" >
<img  src={"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"} alt="" />
</Link>
{/* form */}
<div className={classes.login__container}>
  <h1>Sign In</h1>
  <form action="">
    <div >
      <label htmlFor="email">Email</label>
      <input value={email}  onChange={(e)=>setEmail(e.target.value)} type="email" id='email' />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id='password' />
    </div>
    <button name='signIn' type='submit' onClick={authHandler} className={classes.login__signInButton}>
     Sign In
    </button>
  </form>
  {/* --agreement-- */}
  <p>
    By signing-in you agree to the AMAZON FAKE CLONE Conditons of use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
  </p>
  {/* create account btn */}
  <button name='signUP' type='submit' onClick={authHandler}  className={classes.login__register}> Create your Account
  </button>
  
</div>
    </section>
  )
}

export default Auth
