import React, { useState } from 'react'
import s from './Portfolio.module.scss'
import { useSpring, animated } from 'react-spring'

export default function Portfolio() {
  const fadeIn = useSpring({to: {opacity: 1}, from: { opacity: 0}})
  
  return (
    <animated.div style={fadeIn}>
      <h1 className={s.Title}>Portfolio</h1>  
    </animated.div>
  )
}
