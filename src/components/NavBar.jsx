import { IconAlignRight, IconX } from '@tabler/icons'
import React from 'react'
import { useState } from 'react'
import * as styles from "./styles/NavBar.module.scss"
import { motion } from 'framer-motion'

const NavBar = () => {

  const [ open, setOpen ] = useState(true)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0,y:-10 },
    show: { opacity: 1 ,y:-0}
  }

  return ( 
    <motion.div
    initial="hidden"
    animate="show"
    className={styles.NavBar} variants={container}>
        <motion.a href="https://arkechat.live" className={styles.Title} variants={item}>
            <img src="/arke.svg" alt="Arke Logo" />
            <span>Arkē</span>
        </motion.a>
        <div className={styles.NavLinks}>
            <motion.a variants={item} href="#home">Home</motion.a>
            <motion.a variants={item} href="#highlights">Hightlights</motion.a>
            <motion.a variants={item} href="#showcase">Showcase</motion.a>
            <motion.a variants={item} href="#community">Community</motion.a>
        </div>
        <motion.div variants={item} className={styles.NavAuth}>
            {/* <a href="#">Log in</a> */}
            <a className={styles.Btn} href="https://app.arkechat.live">Launch App</a>
            <div className={styles.RespNav} onClick={()=>{setOpen(!open)}}>
              {open ? <IconAlignRight stroke={1} size={22} /> : <IconX stroke={1} size={22} />}
            </div>
        </motion.div>
        <div className={`${styles.RespNavLinks} ${open ? styles.Open : ""}`}>
            <a  onClick={()=>{setOpen(!open)}} href="#home">Home</a>
            <a  onClick={()=>{setOpen(!open)}} href="#highlights">Hightlights</a>
            <a  onClick={()=>{setOpen(!open)}} href="#showcase">Showcase</a>
            <a  onClick={()=>{setOpen(!open)}} href="#community">Community</a>
        </div>
    </motion.div>
  )
}

export default NavBar