import React from 'react';
import { IoSearch } from "react-icons/io5";
import { TiLocationOutline } from "react-icons/ti";
import { BsCart3 } from "react-icons/bs";
import classes from "./Header.module.css";
import logo from "../../assets/images/logo.ico";
import Lowerheader from "./LowerHeader";

function Header() {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          {/* logo-section */}
          <div className={classes.logo_container}>
            <a href="#">
              <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
            </a>
            <div className={classes.delivery}>
              <span>
                <TiLocationOutline />
              </span>
              <div>
                <p>delivery to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search-section */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <IoSearch size={25} />
          </div>
          {/* other-section */}
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img src={logo} alt="language flag " />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>
            <a href="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>
            <a href="">
              <p>Returns</p>
              <span>& Orders</span>
            </a>
            <a href="" className={classes.cart}>
              <BsCart3 size={25} />
              <span>0</span>
            </a>
          </div>
        </div>
        <Lowerheader />
      </section>
    </>
  );
}

export default Header;
