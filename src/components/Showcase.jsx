import React from 'react'
import * as styles from './styles/Showcase.module.scss'

import Blaze from "../assets/blaze.png"
import ArkeWeb from "../assets/arkeweb.png"
import ArkeApp from "../assets/arkeapp.png"


const Showcase = () => {
  return (
    <div className={styles.Showcase} id="showcase">
        <div className={styles.TitleSequence}>
            <img src={Blaze} alt="Blazing Fast" />
            <div className={styles.Divider}></div>
            <div className={styles.Titles}>
                <h1>Sleek new ui.</h1>
                <h1>Blazingly fast paced ux.</h1>
            </div>
            <div className={styles.Glow}></div>
        </div>
        <p>Experience satisfying smooth animations, quick and intuitive actions, and tons of different features manufactured with you in mind. Don't ever let your tools slow you down! </p>
        <div className={styles.ImgFrame}>
          <img className={styles.ArkeWeb} src={ArkeWeb} alt="Arke Web UI" />
          <img className={styles.ArkeApp} src={ArkeApp} alt="Arke Web UI" />
        </div>
    </div>
  )
}

export default Showcase