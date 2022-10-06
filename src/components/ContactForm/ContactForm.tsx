import React, { useState, useEffect } from 'react'
import axios from 'axios'
import s from './ContactForm.module.scss'
import { useTranslation } from 'react-i18next'
import emailjs from 'emailjs-com';

interface userInput {
  name: string,
  last_name: string,
  email: string,
  message: string,
}

export default function ContactForm() {
  const [t, i18n] = useTranslation<string>("global")
  const [userInput, setUserInput] = useState<userInput>({
    name: '',
    last_name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    const key = e.target.name
    setUserInput({ 
      ...userInput,
      [key]: value
    }
    )
  }

  const handleSubmit = (e: any): void => {
    const target = e.target as HTMLFormElement
    console.log(target);
    
    e.preventDefault()
    const templateId = 'template_b8gwocb';
    const userId = 'NIVAkWd-Q0ddllGX1';
    const serviceId = 'service_mdtwkgr';

    emailjs.sendForm(serviceId, templateId,  target, userId)

    setUserInput({
      name: '',
      last_name: '',
      email: '',
      message: ''
    })
    // sendEmail(templateId, serviceId, e.target, userId)
  }

  return (
    <div className={s.formContainer}>
      <h1 className={s.contactText}>{t("contact.contactTitle_label")}</h1>
      <form action="POST" className={s.form} onSubmit={handleSubmit}>
        <div className={s.nameLastNameContainer}>
          <div className={s.nameInputContainer}>
            <label>{t("contact.name_label")}</label>
            <input type="text" name='name' value={userInput.name} onChange={handleChange}/>
          </div>
          <div className={s.lastNameInputContainer}>
            <label>{t("contact.lastName_label")}</label>
            <input type="text" name='last_name' value={userInput.last_name} onChange={handleChange}/>
          </div>
        </div>
        <div className={s.emailInputContainer}>
          <label>{t("contact.email_label")}</label>
          <input type="text" name='email' value={userInput.email} onChange={handleChange}/>
        </div>
        <div className={s.messageInputContainer}>
          <label>{t("contact.message_label")}</label>
          <textarea name='message' value={userInput.message} onChange={handleChange}></textarea>
        </div>
        <button className={s.submitBtn} type="submit">{t("contact.submit_btn")}</button>
      </form>
    </div>
  )
}
