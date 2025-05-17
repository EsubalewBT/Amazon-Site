import React from 'react'
import CarouseEffect from '../../Component/Carousel/CarouseEffect'
import Category from '../../Component/Category/Category.jsx'
import Product from '../../Component/product/product.jsx'
import Layout from '../../Component/Layout/Layout.jsx'
function Landing() {
  return (
    <Layout>
       <CarouseEffect/>
       <Category/>
       <Product/>
    </Layout>
  )
}

export default Landing
