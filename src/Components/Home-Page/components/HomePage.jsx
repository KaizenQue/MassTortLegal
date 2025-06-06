import React from 'react'
import About from './About'
import Features from './features'
import Contact from './contact'
import Navigation from './navigation'
import Services from './services'
import Header from './header'

function HomePage() {
    
  return (
    <div>
        <Navigation />
        <Header />
        <Features />
        <About /> 
        <Services />
        <Contact />
    </div>
  )
}

export default HomePage