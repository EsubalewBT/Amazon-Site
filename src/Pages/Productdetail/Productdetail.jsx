import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { productUrl } from "../../API/api"
import ProductCard from '../../Component/product/ProductCard'
import Layout from '../../Component/Layout/Layout'
import Loader from '../../Component/Loader/Loader'

function Productdetail() {
  const { productid } = useParams()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(`${productUrl}/products/${productid}`)
      .then((res) => {
        // console.log(res.data)
        setProduct(res.data)
        setLoading(false)
      }).catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      {loading ? <Loader/> :(<ProductCard data={product} />) }
      
    </Layout>
  )
}

export default Productdetail
