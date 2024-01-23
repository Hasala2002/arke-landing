import { IconChevronRight } from '@tabler/icons'
import React, { useEffect, useRef, useState } from 'react'
import * as styles from "./styles/Home.module.scss"
import { motion } from 'framer-motion'
import Hero from "../assets/hero.png"
import Arke from "../assets/arke.png"

const Home = () => {

  const MainButton = useRef()

  const handleMouseMove = e => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  useEffect(() => {
    MainButton.current.onmousemove = e => handleMouseMove(e)
  }, [])

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {

      const newScrollPosition = document.getElementById("appWrap").scrollTop;

      setScrollVelocity(newScrollPosition - scrollPosition);
      setScrollPosition(newScrollPosition);

      // console.table({ "Scroll Position": newScrollPosition, "Scroll Velocity": newScrollPosition - scrollPosition })
    };

    const handleScrollEnd = () => {
      setScrollVelocity(0);
    };

    // Attach the scroll event listener when the component mounts
    document.getElementById("appWrap").addEventListener('scroll', handleScroll);
    document.getElementById("appWrap").addEventListener("scrollend", handleScrollEnd);

    // Detach the scroll event listener when the component unmounts
    return () => {
      document.getElementById("appWrap").removeEventListener('scroll', handleScroll);
      document.getElementById("appWrap").addEventListener("scrollend", handleScrollEnd);
    };
  }, []); // Empty dependency array means this effect will only run once on mount


  useEffect(() => {
    const updateAnimation = () => {
      setScrollPosition((prevScrollPosition) => prevScrollPosition + scrollVelocity * 0.1);
    };

    const animationFrame = requestAnimationFrame(updateAnimation);

    return () => cancelAnimationFrame(animationFrame);
  }, [scrollVelocity]);

  return (
    <div className={styles.Content} id="home">
      <p className={styles.Quote}>"After the victory, Zeus removed her wings before throwing her into Tartaros"<p className={styles.Source}>-Ptolemy Hephaestion, New History</p></p>
      <div className={styles.HeroImg}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.75]
          }}
          style={{ transform: `translateY(-${scrollPosition * 0.25}px)` }}
          transition={{
            delay: 1,
            duration: 2,
            ease: "easeInOut",
          }}
          className={styles.AngelImg}
          src={Arke} alt="Arke" />
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20,
          delay: 1
        }}
      >Arkē <span>Chat</span></motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20,
          delay: 1.25
        }}
      >Chat private. Chat free.</motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20,
          delay: 1.5
        }}
      >Create your own disposable chatroom, invite other people to chat with you and not worry about anyone else snooping into your conversation. Nothing is saved.</motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 20,
          delay: 1.75
        }}
        className={styles.BtnGroup}>
        <motion.a
          href="https://app.arkechat.live"
          whileTap={{ scale: 0.99 }}
          className={styles.MainBtn} ref={MainButton}>
          <div className={styles.BtnBorder}></div>
          <div className={styles.BtnContent}>
            <span>Get started</span> <IconChevronRight stroke={2} />
          </div>
        </motion.a>
        <a href="#highlights" className={styles.SubBtn}> <button>Learn more</button></a>
      </motion.div>
    </div>
  )
}

export default Home