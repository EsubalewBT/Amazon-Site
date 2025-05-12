import React  from 'react';
// import axios from 'axios';
import {cardInfo} from './categorydata';
import Categorycard from './Categorycard';
import classes from "./Category.module.css";
function Category() {
  return (
    <section className={classes.Category__container}>
      {
        cardInfo.map((info, id)=>{
            return <Categorycard key={id} data={info} />    
        })
      }
    </section>
  );
}

export default Category;
