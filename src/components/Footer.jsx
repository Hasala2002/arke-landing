import React from 'react'
import * as styles from './styles/Footer.module.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Title}>
        <h3>Arkē</h3>
        <h3>The Real Private Chat</h3>
      </div>
      <div className={styles.Links}>
        <span><NavLink to="/terms-of-service">Terms</NavLink> • <NavLink to="/privacy-policy">Privacy</NavLink></span>
      </div>
    </div>
  )
}

export default Footer