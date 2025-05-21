import React from 'react';
import Rating from "@mui/material/Rating";
import CurrencyFormat from '../Currencyformat/Currencyformat';
import classes from "../product/Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ data, flex, renderdesc }) {
  return (
    <div className={`${classes.card__container} ${flex ? classes.product__fixed : ''}`}>
      <Link to={`/products/${data.id}`}>
        <img src={data.image} alt={data.title} />
      </Link>
      
      <div className={classes.product__info}>
        <h3>{data.title}</h3>
        
        {renderdesc && (
          <div className={classes.description} >{data.description}</div>
        )}

        <div className={classes.rating}>
          {data.rating ? (
            <Rating value={data?.rating.rate} precision={0.1} />
          ) : (
            <span>No rating</span>
          )}
          <small>{data?.rating ? data?.rating.count : 0}</small>
        </div>

        <div className={classes.price}>
          <CurrencyFormat amount={data?.price} />
        </div>

        <button className={classes.button}>
          add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
