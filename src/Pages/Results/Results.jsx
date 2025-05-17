import React, { useState, useEffect } from 'react'
import Layout from '../../Component/Layout/Layout'
import {useParams} from "react-router-dom"
import axios from 'axios'
import {productUrl} from "../../API/api"
import classes from "./Result.module.css"
import ProductCard from '../../Component/product/ProductCard'
function Results() {
const [results, setResults] = useState([])
const {CategoryName} = useParams()
useEffect(()=>{
  axios.get(`${productUrl}/products/category/${CategoryName}`)
  .then((res)=>{
    setResults(res.data)
    console.log(res.data)
  })
})

  return (
    <Layout>
      <section >
        
           <h1 style={{padding:"30px"}}>Result</h1>
           <p style={{padding:"30px"}}>category/{CategoryName}</p>
           <hr />
           <div className={classes.Products__container}>
             {
              results.map((product, id)=>(
                <ProductCard key={id} data={product} />
              ))
             }
           </div>
        
      </section>
    </Layout>
    
  )
}

export default Results
