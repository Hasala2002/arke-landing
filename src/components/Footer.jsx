import React from 'react'
import * as styles from './styles/Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.Footer}>
        <div className={styles.Title}>
            <h3>Arkē</h3>
            <h3>The Real Private Chat</h3>
        </div>
        <div className={styles.Links}>
            <span><a onClick={()=>{alert("Sorry!, Still working on this.")}} href="#">Terms</a> • <a onClick={()=>{alert("Sorry!, Still working on this.")}} href="#">Privacy</a></span>
        </div>
    </div>
  )
}

export default Footer