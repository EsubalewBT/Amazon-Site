import React from 'react'
import Layout from '../../Component/Layout/Layout'
import { useContext } from 'react'
import { DataContext } from '../../Component/DataProvider/DataProvider.jsx'
import ProductCard from '../../Component/product/ProductCard.jsx'
import CurrencyFormat from '../../Component/Currencyformat/Currencyformat.jsx'
import { Link } from 'react-router-dom'
import classes from './Cart.module.css'

function Cart() {
  const [{ basket }] = useContext(DataContext);
  const total=basket?.reduce((amount, item)=>{
    return item.price + amount;
  }, 0)
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
                    return <ProductCard
                      key={i}
                      data={item}
                      flex={true}
                      renderdesc={true}
                      renderadd={false}
                    />
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
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
    
  )
}

export default Cart
