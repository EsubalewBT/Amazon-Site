import React from 'react'
import Rating from "@mui/material/Rating"
import CurrencyFormat from '../Currencyformat/Currencyformat'
import classes from "../product/Product.module.css";
// import classes from "./Product.module.css";
function ProductCard({data}) {
  return (
    <div className={classes.card__container}>
      <a href="">
        <img src={data.image} alt="" />
      </a>
      <div>
        <h3>{data.title}</h3>
        <div className={classes.rating}>
            {/* rating */}
            <Rating  value={data.rating.rate}  precision={0.1}/>
            {/* count */}
            <small>{data.rating.count}</small>
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
