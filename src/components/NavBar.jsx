import { IconAlignRight, IconX } from '@tabler/icons'
import React from 'react'
import { useState } from 'react'
import * as styles from "./styles/NavBar.module.scss"


const NavBar = () => {

  const [ open, setOpen ] = useState(true)

  return ( 
    <div className={styles.NavBar}>
        <div className={styles.Title}>
            <img src="/arke.svg" alt="Arke Logo" />
            <span>Arkē</span>
        </div>
        <div className={styles.NavLinks}>
            <a href="#home">Home</a>
            <a href="#highlights">Hightlights</a>
            <a href="#showcase">Showcase</a>
            <a href="#community">Community</a>
        </div>
        <div className={styles.NavAuth}>
            <a href="#">Log in</a>
            <a className={styles.Btn} href="#">Sign up</a>
            <div className={styles.RespNav} onClick={()=>{setOpen(!open)}}>
              {open ? <IconAlignRight stroke={1} size={22} /> : <IconX stroke={1} size={22} />}
            </div>
        </div>
        <div className={`${styles.RespNavLinks} ${open ? styles.Open : ""}`}>
            <a  onClick={()=>{setOpen(!open)}} href="#home">Home</a>
            <a  onClick={()=>{setOpen(!open)}} href="#highlights">Hightlights</a>
            <a  onClick={()=>{setOpen(!open)}} href="#showcase">Showcase</a>
            <a  onClick={()=>{setOpen(!open)}} href="#community">Community</a>
        </div>
    </div>
  )
}

export default NavBar