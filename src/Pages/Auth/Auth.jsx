import React from 'react'
import classes from './Auth.module.css'
import { Link } from 'react-router-dom';
function Auth() {
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
      <input type="email" id='email' />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <input type="password" id='password' />
    </div>
    <button name='signIn' type='submit' className={classes.login__signInButton}>
     Sign In
    </button>
  </form>
  {/* --agreement-- */}
  <p>
    By signing-in you agree to the AMAZON FAKE CLONE Conditons of use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
  </p>
  {/* create account btn */}
  <button name='signUP' type='submit'  className={classes.login__register}> Create your Account
  </button>
  
</div>
    </section>
  )
}

export default Auth
