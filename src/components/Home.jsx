import { IconChevronRight } from '@tabler/icons'
import React, { useEffect, useRef } from 'react'
import * as styles from "./styles/Home.module.scss"

import Hero from "../assets/hero.png"

const Home = () => {

    const MainButton = useRef()

    const handleMouseMove = e =>{
        const  {  currentTarget: target } = e;
        const rect = target.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top
        
          target.style.setProperty("--mouse-x", `${x}px`);
          target.style.setProperty("--mouse-y", `${y}px`);
      }

    useEffect(() => {
      MainButton.current.onmousemove = e => handleMouseMove(e)
    }, [])
    

  return (
    <div className={styles.Content} id="home">
        <div className={styles.HeroImg}>
            {/* <div className={styles.Glow}></div>
            <div className={styles.Glow}></div> */}
            <img src={Hero} alt="Arke" />
        </div>
        <h1>Arkē <span>Chat</span></h1>
        <h2>Chat private. Chat free.</h2>
        <p>Create your own disposable chatroom, invite other people to chat with you and not worry about anyone else snooping into your conversation. Nothing is saved.</p>
        <div className={styles.BtnGroup}>
            <div className={styles.MainBtn} ref={MainButton}>
            <div className={styles.BtnBorder}></div>
                <div className={styles.BtnContent}>
                <span>Get started</span> <IconChevronRight stroke={2} />
                </div>
            </div>
            <button className={styles.SubBtn}>Learn more</button>
        </div>
    </div>
  )
}

export default Home