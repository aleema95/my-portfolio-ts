import React from 'react'
import s from './ContactForm.module.scss'

export default function ContactForm() {
  return (
    <div className={s.formContainer}>
      <h1 className={s.contactText}>CONTACT</h1>
      <form action="" className={s.form}>
        <div className={s.nameLastNameContainer}>
          <div className={s.nameInputContainer}>
            <label>Name</label>
            <input type="text" />
          </div>
          <div className={s.lastNameInputContainer}>
            <label>Last Name</label>
            <input type="text" />
          </div>
        </div>
        <div className={s.emailInputContainer}>
          <label>Email</label>
          <input type="text" />
        </div>
        <div className={s.messageInputContainer}>
          <label>Message</label>
          <input type="text-area" />
        </div>
        <input className={s.submitBtn} type="submit" />
      </form>
    </div>
  )
}
