import { ResumeProps } from '../../../types/types'
import cvIcon from '../../../assets/images/cvIcon.png'
// @ts-ignore
import cv_ES from '../../../assets/cv/cv_ES.pdf'
import cv_EN from '../../../assets/cv/cv_EN.pdf'
import s from './Resume.module.scss'
import { useTranslation } from 'react-i18next'

export default function Resume({ language }: ResumeProps) {
 const [t, i18n] = useTranslation<string>("global")
  
  return (
    <div className={s.cvContainer}>
      <a href={language === "en" ? cv_EN : cv_ES} download><img src={cvIcon} alt="" className={s.cvLogo} /></a>
      <h6 className={s.downloadText}>{t("home.resume.download_text")}</h6>
    </div>
  )
}
