import s from './Home.module.scss'
import { useTranslation } from 'react-i18next'
import Portfolio from '../Portfolio/Portfolio'


export default function Home() {
  const [t, i18n] = useTranslation<string>("global")


  return (
    <>
      <div className={s.mainContainer}>
        <div className={s.mainTextContainer}>
          <h1 className={s.mainTitle}>{t('home.greeting_title')}</h1>
          <h3 className={s.description}>{t('home.self_description_1')}<span>{t('home.name')}</span></h3>
          <h3 className={s.description}>{t('home.self_description_2')}<span>{t('home.self_description_3')}</span>{t('home.self_description_4')}</h3>
          <h3 className={s.description}><span>{t('home.self_description_5')}</span></h3>
        </div>
        <div className={s.phantomDiv}></div>
      </div>
      <Portfolio />
    </>
  )
}
