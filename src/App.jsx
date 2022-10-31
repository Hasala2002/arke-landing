import React from 'react'
import { Community, Footer, Highlights, Home, NavBar, Showcase } from './components/imports.js'

function App() { 
  return (
    <div className="App">
        <NavBar />
        <Home />
        <Highlights />
        <Showcase />
        <Community />
        <Footer />
    </div>
  )
}

export default App