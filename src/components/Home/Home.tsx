import s from './Home.module.scss'
import { useTranslation } from 'react-i18next'


export default function Home() {
  const [t, i18n] = useTranslation<string>("global")


  return (
    <div className={s.mainContainer}>
      <h1 className={s.mainTitle}>{t('home.greeting_title')}</h1>
    </div>
  )
}
