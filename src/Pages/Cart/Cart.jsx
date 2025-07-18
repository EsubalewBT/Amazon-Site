import React from 'react'
import Layout from '../../Component/Layout/Layout'
import { useContext } from 'react'
import { DataContext } from '../../Component/DataProvider/DataProvider.jsx'
import ProductCard from '../../Component/product/ProductCard.jsx'
import CurrencyFormat from '../../Component/Currencyformat/Currencyformat.jsx'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'
import { Type } from '../../Component/Utilities/action.type.js'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);
  const total = basket?.reduce((amount, item) => {
    return item.price * (item.amount || 1) + amount;
  }, 0);
   const increment=(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }
  const decrement=(id)=>{
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your Shopping basket</h3>
          <hr />
          {
            basket?.length==0?(<p>Opps ! No item in your cart</p>):(
              basket?.map((item, i) => {
                    return <section className={classes.cart_product}><ProductCard
                      key={i}
                      data={item}
                      flex={true}
                      renderdesc={true}
                      renderadd={false}
                    />
                    <div className={classes.btn_container}>
                    <button className={classes.btn} onClick={()=>increment(item)}><IoIosArrowUp size={20} /></button>
                    <span>{item.amount}</span>
                    <button className={classes.btn} onClick={()=>decrement(item.id)}><IoIosArrowDown size={20} /></button>
                    </div>
                    </section>
              })
            )
          }
        </div>
        { basket?.length!==0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payment">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
    
  )
}

export default Cart
