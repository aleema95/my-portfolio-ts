import s from './Home.module.scss'
import { useTranslation } from 'react-i18next'
import Portfolio from '../Portfolio/Portfolio'
import linkedIn_logo from '../../assets/images/linkedin-logo.png'
import github_logo from '../../assets/images/github.png'
import { useEffect, useRef } from 'react'



export default function Home() {
  const [t, i18n] = useTranslation<string>("global")
  const carouselSection = useRef<HTMLDivElement>(null)

  const scrollToCarousel = () => carouselSection.current?.scrollIntoView()

  useEffect(() => {
    console.log(carouselSection);
  }, [carouselSection])

  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.logosContainer} >
            <a href="https://www.linkedin.com/in/alejandro-manouellian/"><img className={s.linkedinLogo} src={linkedIn_logo} alt="link to linkedin logo" /></a>  
            <a href="https://github.com/aleema95"><img className={s.githubLogo} src={github_logo} alt="link to github logo" /></a>  
        </div>
        <div className={s.mainTextContainer}>
          <h1 className={s.mainTitle}>{t('home.greeting_title')}</h1>
          <h3 className={s.description}>{t('home.self_description_1')}<span>{t('home.name')}</span></h3>
          <h3 className={s.description}>{t('home.self_description_2')}<span>{t('home.self_description_3')}</span>{t('home.self_description_4')}</h3>
          <h3 className={s.description}><span>{t('home.self_description_5')}</span></h3>
          <div className={s.scrollToCarouselBtn}>
            <button onClick={scrollToCarousel}>{t('carousel.title')}</button>
          </div>
        </div>
        <div className={s.phantomDiv}></div>
      </div>
        <Portfolio carouselSection={carouselSection} />
    </>
  )
}
