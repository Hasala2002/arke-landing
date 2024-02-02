import React, { useRef } from 'react'
import { Community, Footer, Highlights, Home, NavBar, Showcase } from './components/imports.js'

const HomePage = () => {
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
                <Home />
                <Highlights />
                <Showcase />
                <Community />
                <Footer />
            </div>
        </div>
    )
}

export default HomePage