import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './src/Pages/Landing/Landing'
import Cart from './src/Pages/Cart/Cart'
import Auth from './src/Pages/Auth/Auth'
import Order from './src/Pages/Order/Order'
import Payment from './src/Pages/Payment/Payment'
import Results from './src/Pages/Results/Results'

function Routing() {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/category/:CategoryName" element={<Results />} />
        
      </Routes>
    </Router>
  )
}

export default Routing
