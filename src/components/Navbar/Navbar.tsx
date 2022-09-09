import { Link } from 'react-router-dom'
import s from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [t, i18n] = useTranslation<string>("global")

  function handleLanguageChange(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    const language = target.value
    
    i18n.changeLanguage(language)
  }

  return (
    <div className={s.mainContainer}>
      <ul className={s.listContainer}>
        <Link className={s.mainLink} to='/'>Alejandro Manouellian</Link>
        <div className={s.navLinksContainer}>
          <Link className={s.link} to='/'>{t('navbar.home')}</Link>
          <Link className={s.link} to='/About'>{t('navbar.about')}</Link>
        </div>
      </ul>
      <div className={s.languageChangeBtnContainer}>
        <button value="es" onClick={handleLanguageChange}>{t('navbar.lng-es')}</button>
        <button value="en" onClick={handleLanguageChange}>{t('navbar.lng-en')}</button>
      </div>
    </div>
  )
}
