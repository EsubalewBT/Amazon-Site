import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from "./Product.module.css";
import ProductCard from './ProductCard';


function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={classes.Products__container}>
      {
        products.map((product, id) => {
          return <ProductCard key={id} data={product} />;
        })
      }
    </section>
  );
}

export default Product;
