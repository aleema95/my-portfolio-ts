import s from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export default function Navbar() {
  const [t, i18n] = useTranslation<string>("global")
  const [activeLanguage, setActiveLanguage] = useState<boolean>(false)

  function handleLanguageChange(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    const language = target.value

    if(language === 'es') {
      setActiveLanguage(true)
    } else {
      setActiveLanguage(false)
    }
    i18n.changeLanguage(language)
  }

  return (
    <div className={s.mainContainer}>
      <ul className={s.listContainer}>
        <h3 className={s.nameTitle}>Alejandro Manouellian</h3>
      </ul>
      <div className={s.languageChangeBtnContainer}>
        <button className={`${s.languageBtn} ${activeLanguage ? s.activeLanguage : null} `} value="es" onClick={handleLanguageChange}>{t('navbar.lng-es')}</button>
        <button className={`${s.languageBtn} ${!activeLanguage ? s.activeLanguage : null} `} value="en" onClick={handleLanguageChange}>{t('navbar.lng-en')}</button>
      </div>
    </div>
  )
}
