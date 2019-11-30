import React from 'react'
import styles from './RegistrationPage.module.css'
import GoogleButton from '../GoogleButton/GoogleButton'

const RegistrationPage = props => {
  const page = props.location.pathname

  return (
    <div
      className={
        page === '/registration' ? styles.regContainer : styles.loginContainer
      }
    >
      <div className={styles.formContainer}>
        <GoogleButton />
      </div>
    </div>
  )
}

export default RegistrationPage
