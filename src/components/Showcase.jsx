import React from 'react'
import * as styles from './styles/Showcase.module.scss'

import Blaze from "../assets/blaze.png"
import ArkeWeb from "../assets/arkeweb.png"
import ArkeApp from "../assets/arkeapp.png"
import TiltCardContainer from './utilities/TiltCard'


const Showcase = () => {
  return (
    <>
      <div className={styles.Showcase} id="showcase">
        <div className={styles.TitleSequence}>
          <img src={Blaze} alt="Blazing Fast" />
          <div className={styles.Divider}></div>
          <div className={styles.Titles}>
            <h1>Sleek mordern ui.</h1>
            <h1>Blazingly intuitive ux.</h1>
          </div>
          <div className={styles.Glow}></div>
        </div>
        <p>Experience satisfying smooth animations, quick and intuitive actions, and tons of different features manufactured with you in mind. Don't ever let your tools slow you down! </p>
        <div className={styles.ImgFrame}>
          {/* <img className={styles.ArkeWeb} src={ArkeWeb} alt="Arke Web UI" />
          <img className={styles.ArkeApp} src={ArkeApp} alt="Arke Web UI" /> */}
          <TiltCardContainer />
        </div>

      </div>
    </>
  )
}

export default Showcase