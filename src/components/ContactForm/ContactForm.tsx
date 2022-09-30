import React from 'react'
import s from './ContactForm.module.scss'
import { useTranslation } from 'react-i18next'

export default function ContactForm() {
  const [t, i18n] = useTranslation<string>("global")

  return (
    <div className={s.formContainer}>
      <h1 className={s.contactText}>{t("contact.contactTitle_label")}</h1>
      <form action="" className={s.form}>
        <div className={s.nameLastNameContainer}>
          <div className={s.nameInputContainer}>
            <label>{t("contact.name_label")}</label>
            <input type="text" />
          </div>
          <div className={s.lastNameInputContainer}>
            <label>{t("contact.lastName_label")}</label>
            <input type="text" />
          </div>
        </div>
        <div className={s.emailInputContainer}>
          <label>{t("contact.email_label")}</label>
          <input type="text" />
        </div>
        <div className={s.messageInputContainer}>
          <label>{t("contact.message_label")}</label>
          <textarea></textarea>
        </div>
        <input className={s.submitBtn} type="submit" value={t("contact.submit_btn")}/>
      </form>
    </div>
  )
}
