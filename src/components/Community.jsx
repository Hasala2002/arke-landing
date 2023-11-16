import React from 'react'
import * as styles from './styles/Community.module.scss'
import Heart from "../assets/heart.png"
import { IconBrandGithub, IconCode, IconCoffee, IconFlame, IconHeartHandshake, IconStar } from '@tabler/icons'

const Community = () => {

    const handleMouseMove = e => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }

    return (
        <div className={styles.CommunitySection} id="community">
            <div className={styles.CommunityTitle}>
                <div className={styles.Divider}></div>
                <h2>at arkē we <img src={Heart} alt="Heart" /> open-source</h2>
                <div className={styles.Divider}></div>
            </div>
            <div className={styles.Community}>
                <div className={styles.CommunityCard} onMouseMove={handleMouseMove}>
                    <div className={styles.Title}>
                        <IconBrandGithub stroke={3} />
                        <h2>Contribute</h2>
                    </div>
                    <p>Keep track of development in github by giving us a star. Open issues and feature requests. You can help us too? You’re more than welcome.</p>
                    <div className={styles.BtnGroup}>
                        <a href="https://github.com/Hasala2002/arke/issues" className={styles.BtnBordered}>
                            <IconCode color={"#72128f"} size={19} />
                            Issues
                        </a>
                        <a href="https://github.com/Hasala2002/arke" className={styles.BtnColored}>
                            <IconStar color={"#fff"} size={19} />
                            Star us
                        </a>
                    </div>
                </div>
                <div className={styles.CommunityCard} onMouseMove={handleMouseMove}>
                    <div className={styles.Title}>
                        <IconFlame stroke={3} />
                        <h2>Connect</h2>
                    </div>
                    <p>Want to keep track of updates and new features? Want to find about new release dates and other related news? Follow us now!</p>
                    <div className={styles.BtnGroup}>
                        <a href="https://github.com/Hasala2002/arke" className={styles.BtnBordered}>
                            Follow
                        </a>
                    </div>
                </div>
                <div className={styles.CommunityCard} onMouseMove={handleMouseMove}>
                    <div className={styles.Title}>
                        <IconHeartHandshake stroke={3} />
                        <h2>Donate</h2>
                    </div>
                    <p>We do this for fun, but donations are appreciated. Thanks for the support!</p>
                    <div className={styles.BtnGroup}>
                        <a href="https://www.buymeacoffee.com/hhasala200m" className={styles.BtnBordered}>
                            <IconCoffee color={"#72128f"} size={19} />
                            Buy me a coffee
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community