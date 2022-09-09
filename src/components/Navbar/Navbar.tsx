import { Link } from 'react-router-dom'
import s from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [t, i18n] = useTranslation<string>("global")
  const [activeLanguage, setActiveLanguage] = useState<boolean>(false)
  const [activeWindow, setActiveWindow] = useState<{homeActive: boolean, aboutActive: boolean}>({homeActive: true, aboutActive: false})

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

  function handleActiveWindow(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    if (target.name === 'homeActive') {
      setActiveWindow({homeActive: true, aboutActive: false })
    }  else {
      setActiveWindow({homeActive: false, aboutActive: true})
    }
  }

  useEffect(() => {
    console.log(activeWindow);
    
  }, [activeWindow])

  return (
    <div className={s.mainContainer}>
      <ul className={s.listContainer}>
        <h3 className={s.nameTitle}>Alejandro Manouellian</h3>
        <div className={s.navLinksContainer}>
          <Link to='/'><button type='button' name='homeActive' className={`${s.link} ${activeWindow.homeActive ? s.activeWindow : null}`} onClick={handleActiveWindow}>{t('navbar.home')}</button></Link>
          <Link to='/About'><button type='button' name='aboutActive' className={`${s.link} ${activeWindow.aboutActive ? s.activeWindow : null}`} onClick={handleActiveWindow}>{t('navbar.about')}</button></Link>
        </div>
      </ul>
      <div className={s.languageChangeBtnContainer}>
        <button className={`${s.languageBtn} ${activeLanguage ? s.activeLanguage : null} `} value="es" onClick={handleLanguageChange}>{t('navbar.lng-es')}</button>
        <button className={`${s.languageBtn} ${!activeLanguage ? s.activeLanguage : null} `} value="en" onClick={handleLanguageChange}>{t('navbar.lng-en')}</button>
      </div>
    </div>
  )
}
