import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from "./Product.module.css";
import ProductCard from './ProductCard';
import Loader from '../Loader/Loader';

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    loading ? <Loader /> :(<section className={classes.Products__container}>
      {
        products.map((product, id) => {
          return <ProductCard key={id} data={product} renderadd={true} />;
        })
      }
    </section>)
    
    
  );
}

export default Product;
