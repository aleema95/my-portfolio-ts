import React, { useEffect, useState } from 'react'
import s from './ContactForm.module.scss'
import { userInput, Errors } from '../../types/types';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion'
import { validation } from '../../functions/functions'


export default function ContactForm() {
  const { REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID, REACT_APP_SERVICE_ID } = process.env
  const [t, i18n] = useTranslation<string>("global")
  const [formErrors, setFormErrors] = useState<Errors>({})
  const [modalIsActive, setmodalIsActive] = useState<Boolean>(false)
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
    })
  }

  useEffect(() => {
    setFormErrors(validation(userInput))
  }, [userInput])
  
  const openModal = (e: React.MouseEvent<HTMLHeadingElement>): void => {
    setmodalIsActive(!modalIsActive)
  }  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    const target = e.target as HTMLFormElement
    e.preventDefault()

    if(Object.keys(formErrors).length) {
      Swal.fire({
        title: 'Error',
        position: 'center',
        text: `${t("contact.alert.empty_field")}`,
        color: '#000000',
        background: '#be9e5f',
        showConfirmButton: false,
        timer: 1700,
      })
      return
    }
    
    try {
      const templateId: any = REACT_APP_TEMPLATE_ID;
      const userId: any = REACT_APP_USER_ID;
      const serviceId: any = REACT_APP_SERVICE_ID;
  
      await emailjs.sendForm(serviceId, templateId, target, userId)
      Swal.fire({
        title: 'Success',
        position: 'center',
        text: `${t("contact.alert.success")}`,
        color: '#000000',
        background: '#be9e5f',
        showConfirmButton: false,
        timer: 1700,
      })

    } catch (error) {
      console.error(error);
      
      Swal.fire({
        title: 'Error',
        position: 'center',
        text: `${t("contact.alert.failure")}`,
        color: '#000000',
        background: '#be9e5f',
        showConfirmButton: false,
        timer: 1700,
      })
    }

    setUserInput({
      name: '',
      last_name: '',
      email: '',
      message: ''
    })
  }

  return (
    <motion.div 
      className={`${s.formContainer} ${modalIsActive ? s.openModal : null}`}
      initial={{x:100}}
      animate={{x:0}}
      transition={{duration: 0.8, delay: 0.5}}
      >
        <h1 onClick={openModal} className={s.contactText}>{t("contact.contactTitle_label")}</h1>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.nameLastNameContainer}>
            <div className={s.nameInputContainer}>
              <div className={s.labelAndErrorsContainer}>
              <label>{t("contact.name_label")}</label>
              <div className={`${s.errors} `}>
                <p className={`${formErrors?.name ? null : s.validField}`}>{t("contact.errors.field_required")}</p>
                <p className={`${formErrors?.nameOnlyLetters ? null : s.validField}`}>{t("contact.errors.only_letters")}</p>
              </div>
              </div>
              <input type="text" name='name' value={userInput.name} onChange={handleChange}/>
            </div>
            <div className={s.lastNameInputContainer}>
              <div className={s.labelAndErrorsContainer}>
                <label>{t("contact.lastName_label")}</label>
                <div className={s.errors}>
                  <p className={`${formErrors?.last_name ? null : s.validField}`}>{t("contact.errors.field_required")}</p>
                  <p className={`${formErrors?.last_nameOnlyLetters ? null : s.validField}`}>{t("contact.errors.only_letters")}</p>
                </div>
              </div>
              <input type="text" name='last_name' value={userInput.last_name} onChange={handleChange}/>
            </div>
          </div>
          <div className={s.emailInputContainer}>
            <div className={s.labelAndErrorsContainer}>
              <label>{t("contact.email_label")}</label>
              <div className={s.errors}>
                <p className={`${formErrors?.email ? null : s.validField}`}>{t("contact.errors.field_required")}</p>
                <p className={`${formErrors?.invalid_email ? null : s.validField}`}>{t("contact.errors.invalid_mail")}</p>
              </div>
            </div>
            <input type="text" name='email' value={userInput.email} onChange={handleChange}/>
          </div>
          <div className={s.messageInputContainer}>
            <div className={s.labelAndErrorsContainer}>
              <label>{t("contact.message_label")}</label>
              <div className={s.errors}>
                  <p className={`${formErrors?.message ? null : s.validField}`}>{t("contact.errors.field_required")}</p>
              </div>
            </div>
            <textarea name='message' value={userInput.message} onChange={handleChange}></textarea>
          </div>
          <button className={s.submitBtn} type="submit">{t("contact.submit_btn")}</button>
        </form>
    </motion.div>
  )
}
