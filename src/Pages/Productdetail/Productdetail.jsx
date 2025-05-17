import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { productUrl } from "../../API/api"
import ProductCard from '../../Component/product/ProductCard'
import Layout from '../../Component/Layout/Layout'

function Productdetail() {
  const { productid } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get(`${productUrl}/products/${productid}`)
      .then((res) => {
        console.log(res.data)
        setProduct(res.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Layout>
      <ProductCard data={product} />
    </Layout>
  )
}

export default Productdetail
