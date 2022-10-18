import React from 'react'
import s from './Technology.module.scss'
import { TechnologyProps } from '../../../../types/types'
import { motion } from 'framer-motion'

export default function Technology({ name, dir, index}: TechnologyProps) {
  const delayTime = index / 4;

  return (
    <motion.div 
    className={s.container}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ delay: delayTime ,duration: 0.5}}
    >
      <h1>{name}</h1>
      <img className={s.imgContainer} src={dir} alt="" />
    </motion.div>
  )
}
