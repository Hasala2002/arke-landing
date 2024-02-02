import React, { useRef } from 'react'
import { Community, Footer, Highlights, Home, NavBar, Showcase } from './components/imports.js'
import * as styles from "./components/styles/Documents.module.scss"
import { motion } from 'framer-motion'
import { IconChevronRight } from '@tabler/icons'

import { TERMS_OF_SERVICE } from './components/utilities/DocumentData.js'

const ToS = () => {
    const blob = useRef(0)

    const blobAnimator = (event) => {
        const { clientX, clientY } = event
        // console.log(clientX,clientY)
        blob.current.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: 3000, fill: "forwards" })
    }

    return (
        <div className="ApplicationWrapper" id="appWrap" onPointerMove={blobAnimator}>
            <div id="blob" ref={blob}></div>
            <div className="blur"></div>
            <div className="App">
                <NavBar />
                <div className={styles.Content}>
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            delay: 1.25
                        }}
                    >Arkē <span>Chat</span> • Terms of Service</motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            delay: 1.5
                        }}
                    >
                        Thank you for choosing Arkē Chat! Before you begin using our platform, we ask that you carefully read and understand the following Terms of Service. These terms govern your use of Arkē Chat and outline the rights and responsibilities of both users and Arkē Chat.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            delay: 1.5
                        }}
                    >
                        Arkē Chat is committed to providing a secure and enjoyable environment for communication. By accessing or using our platform, you agree to abide by these terms. If you do not agree with any part of the terms, we kindly ask that you refrain from using Arkē Chat.
                    </motion.p>
                    <motion.h3
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 160,
                            damping: 20,
                            delay: 1.5
                        }}
                    >
                        Thank you for being part of the Arkē Chat community!
                    </motion.h3>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 160,
                        damping: 20,
                        delay: 1.75
                    }}
                    className={styles.Document}>
                    {
                        TERMS_OF_SERVICE && TERMS_OF_SERVICE.map((term) => {
                            return (
                                <>
                                    <span className={styles.title}>{term.id}. {term.title}</span>
                                    <div className={styles.Divider}>
                                        <div className={styles.line}></div>
                                    </div>
                                    <ul>
                                        {/* <li>Users must agree to and comply with these terms to use Arkē Chat.</li>
                                        <li>By using the app, users agree to be bound by the terms outlined herein.</li> */}
                                        {term.terms && term.terms.map(termStatement => {
                                            return (
                                                <li>{termStatement}</li>
                                            )
                                        })}
                                    </ul>
                                    <div className={styles.Divider}>
                                        <div className={styles.line}></div>
                                    </div>
                                </>
                            )
                        })
                    }
                    <p>If you have any questions or concerns about these terms, feel free to contact us at <a href="mailto:info@arkechat.live">info@arkechat.live</a></p>
                    <p>Again, Thank you for being part of the Arkē Chat community!</p>
                    <span className={styles.end_text}>Arkē Chat @ 2024</span>
                </motion.div>

                <Footer />
            </div>
        </div>
    )
}

export default ToS