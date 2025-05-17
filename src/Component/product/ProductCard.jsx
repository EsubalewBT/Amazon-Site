import React from 'react'
import Rating from "@mui/material/Rating"
import CurrencyFormat from '../Currencyformat/Currencyformat'
import classes from "../product/Product.module.css";
import {Link} from "react-router-dom"
// import classes from "./Product.module.css";
function ProductCard({data}) {
  return (
    <div className={classes.card__container}>
      <Link to={`products/${data.id}`}>
        <img src={data.image} alt="" />
      </Link>
      <div>
        <h3>{data.title}</h3>
        <div className={classes.rating}>
            {/* rating */}
            {data.rating ? (
          <Rating value={data.rating.rate} precision={0.1} />
        ) : (
          <span>No rating</span>
        )}
            {/* count */}
             <small>{data.rating ? data.rating.count : 0}</small>
        </div>
        <div>
            {/* price */}
            <CurrencyFormat amount={data.price} />
        </div>
        <button className={classes.button}>
            add to cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
