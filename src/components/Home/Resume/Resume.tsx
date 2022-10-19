import { ResumeProps } from '../../../types/types'
import cvIcon from '../../../assets/images/cvIcon.png'
// @ts-ignore
import cv_ES from '../../../assets/cv/cv_ES.pdf'
import cv_EN from '../../../assets/cv/cv_EN.pdf'
import s from './Resume.module.scss'

export default function Resume({ language }: ResumeProps) {
  
  return (
    <>
      <a href={language === "en" ? cv_EN : cv_ES} download><img src={cvIcon} alt="" className={s.cvLogo} /></a>
    </>
  )
}
