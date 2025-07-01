import React, { useState, useEffect } from 'react'
import Layout from '../../Component/Layout/Layout'
import {useParams} from "react-router-dom"
import axios from 'axios'
import {productUrl} from "../../API/api"
import classes from "./Result.module.css"
import ProductCard from '../../Component/product/ProductCard'
import Loader from '../../Component/Loader/Loader'
function Results() {
const [results, setResults] = useState([])
const [loading, setLoading] = useState(false)
const {CategoryName} = useParams()
useEffect(()=>{
  setLoading(true)
  axios.get(`${productUrl}/products/category/${CategoryName}`)
  .then((res)=>{
    setResults(res.data)
    console.log(res.data)
    setLoading(false)
  }).catch((err)=>{
    console.log(err)
    setLoading(false)
  })
}, [])

  return (
    <Layout>
      <h1 style={{padding:"30px"}}>Result</h1>
           <p style={{padding:"30px"}}>category/{CategoryName}</p>
           <hr />
      {loading? (<Loader />) : (<section >
        
           
           <div className={classes.Products__container}>
             {
              results.map((product)=>(
                <ProductCard key={product.id} data={product}  renderadd={true}/>
              ))
             }
           </div>
        
      </section>)}
      
    </Layout>
    
  )
}

export default Results
