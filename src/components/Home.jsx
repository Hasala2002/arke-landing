import { IconChevronRight } from '@tabler/icons'
import React, { useEffect, useRef } from 'react'
import * as styles from "./styles/Home.module.scss"
import { motion } from 'framer-motion'
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
            <motion.img
            initial={{ opacity: 0, y:50 }}
             animate={{
              y: [0, 10, 0],
              opacity:[1, 1, 1]
            }}
            transition={{
              delay:2,
              duration: 2,
              ease: "easeInOut",
              times: [0,0.5,1],
              repeat: Infinity,
              repeatDelay: 0
            }}
            src={Hero} alt="Arke" />
        </div>
        <motion.h1
        initial={{ opacity: 0, y:50 }}
        animate={{ opacity: 1 ,y:0}}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20,
          delay:1
        }}
        >Arkē <span>Chat</span></motion.h1>
        <motion.h2
                initial={{ opacity: 0, y:50 }}
                animate={{ opacity: 1 ,y:0}}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 20,
                  delay:1.25
                }}
        >Chat private. Chat free.</motion.h2>
        <motion.p
                initial={{ opacity: 0, y:50 }}
                animate={{ opacity: 1 ,y:0}}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 20,
                  delay:1.5
                }}
        >Create your own disposable chatroom, invite other people to chat with you and not worry about anyone else snooping into your conversation. Nothing is saved.</motion.p>
        <motion.div
                initial={{ opacity: 0, y:50 }}
                animate={{ opacity: 1 ,y:0}}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 20,
                  delay:1.75
                }}
        className={styles.BtnGroup}>
            <motion.div
            whileTap={{ scale: 0.99 }}
            className={styles.MainBtn} ref={MainButton}>
            <div className={styles.BtnBorder}></div>
                <div className={styles.BtnContent}>
                <span>Get started</span> <IconChevronRight stroke={2} />
                </div>
            </motion.div>
            <button className={styles.SubBtn}>Learn more</button>
        </motion.div>
    </div>
  )
}

export default Home