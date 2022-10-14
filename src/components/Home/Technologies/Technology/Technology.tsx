import React from 'react'
import s from './Technology.module.scss'
import { TechnologyProps } from '../../../../types/types'

export default function Technology({ name, dir}: TechnologyProps) {
  return (
    <div className={s.container}>
      <h1>{name}</h1>
      <img className={s.imgContainer} src={dir} alt="" />
    </div>
  )
}
