import React, { useState } from 'react'
import s from './Portfolio.module.scss'
import JobHub from '../../assets/images/JobHub.png'
import gameFlow from '../../assets/images/gameFlow.png'
import { useSpring, animated } from 'react-spring'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Portfolio() {
  const fadeIn = useSpring({to: {opacity: 1}, from: { opacity: 0}})
  
  return (
    // <animated.div style={fadeIn}>
    //   <h1 className={s.Title}>Portfolio</h1>  
    // </animated.div>
    <section className={s.mainContainer}>
      <div className={s.carouselContainer}>
        <Carousel>
          <div>
              <img src={JobHub} />
              <p className="legend">JobHub</p>
          </div>
          <div>
              <img src={gameFlow} />
              <p className="legend">GameFlow</p>
          </div>
        </Carousel>
      </div>
    </section>
  )
}
