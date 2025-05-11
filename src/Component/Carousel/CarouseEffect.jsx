import React from 'react'
import {image} from '../Carousel/image/data'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import classes from "./Carousel.module.css";
function CarouseEffect() {
  return (
    <div>
      <Carousel

       autoPlay={true}
       infiniteLoop={true}
       showThumbs={false}
       showIndicators={false}
      
      >
         {
            image.map((imageLink, index)=>{
                return <img key={index} src={imageLink} alt="" />
            })
         }
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  )
}

export default CarouseEffect
