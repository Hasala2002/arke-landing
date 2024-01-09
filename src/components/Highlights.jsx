import { IconBrandOpenSource, IconBrandSocketIo, IconSpy, IconSpyOff } from '@tabler/icons'
import React from 'react'
import * as styles from './styles/Highlights.module.scss'


const Highlights = () => {
    return (
        <div className={styles.Highlights} id="highlights">
            <div className={styles.Highlight}>
                <div className={styles.Glow}></div>
                <IconSpy size={45} stroke={2} />
                <h1>incognito</h1>
                <p>Chat without worry as nothing is saved. Everthing will be deleted when you close your chat box.</p>
            </div>
            <div className={styles.Highlight}>
                <div className={styles.Glow}></div>
                <h2 style={{ height: 45 }}>e2e</h2>
                <h1>encrypted</h1>
                <p>Any and all messages you send are encrypted end to end. No more unwanted snoopers.</p>
            </div>
            <div className={styles.Highlight}>
                <div className={styles.Glow}></div>
                <IconBrandSocketIo size={45} stroke={2} />
                <h1>sockets</h1>
                <p>Directly join your rooms via web socket connections. No more databases or storing data.</p>
            </div>
            <div className={styles.Highlight}>
                <div className={styles.Glow}></div>
                <IconBrandOpenSource size={45} stroke={2} />
                <h1>open-source</h1>
                <p>Arkē is fully open source with an MIT License. Please feel free to contribute.</p>
            </div>
        </div>
    )
}

export default Highlights