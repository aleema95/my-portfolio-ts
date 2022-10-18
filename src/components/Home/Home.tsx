import s from './Home.module.scss'
import { useTranslation } from 'react-i18next'
import Portfolio from '../Portfolio/Portfolio'
import ContactForm from '../ContactForm/ContactForm'
import linkedIn_logo from '../../assets/images/linkedin-logo.png'
import github_logo from '../../assets/images/github.png'
import { useEffect, useRef } from 'react'
import Technologies from './Technologies/Technologies'
import { motion } from 'framer-motion'
import Resume from './Resume/Resume'


export default function Home() {
  const [t, i18n] = useTranslation<string>("global")
  const carouselSection = useRef<HTMLDivElement>(null)
  const mainTextTransitionTime = 0.5;

  const scrollToCarousel = () => carouselSection.current?.scrollIntoView()

  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.logosContainer} >
          <a href="https://www.linkedin.com/in/alejandro-manouellian/"><img className={s.linkedinLogo} src={linkedIn_logo} alt="link to linkedin logo" /></a>  
          <a href="https://github.com/aleema95"><img className={s.githubLogo} src={github_logo} alt="link to github logo" /></a>  
          <Resume language={i18n.language} />
        </div>
        <div className={s.mainTextContainer}>
          <motion.h1 initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 0 ,duration: mainTextTransitionTime}} className={s.mainTitle}>{t('home.greeting_title')}</motion.h1>
          <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 0.5 ,duration: mainTextTransitionTime}}>
            <h3 className={s.description}>{t('home.self_description_1')}<span>{t('home.name')}</span></h3>
            <h3 className={s.description}>{t('home.self_description_2')}<span>{t('home.self_description_3')}</span>{t('home.self_description_4')}</h3>
            <h3 className={s.description}><span>{t('home.self_description_5')}</span></h3>
          </motion.div>
          <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ delay: 1 ,duration: mainTextTransitionTime}} className={s.scrollToCarouselBtn}>
            <button onClick={scrollToCarousel}>{t('carousel.title')}</button>
          </motion.div>
        </div>
          <Technologies />
      </div>
        <Portfolio carouselSection={carouselSection} />
      <ContactForm />
    </>
  )
}
