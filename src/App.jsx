import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Introduction from './components/Introduction.jsx'
import Aboutme from './components/Aboutme.jsx' 
import Myskills from './components/Myskills.jsx'
import Splash from './components/Splash.jsx'
import Background from './components/background.jsx'
import Contact from './components/contact.jsx'

export default function App() {

  

  let [loding, setLoding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoding(false);
    }, 3000); // Duration of the splash screen in milliseconds
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {
        loding ? <Splash /> :
        <div>
          <Background />
          <Navbar />
          <Introduction />
          <Aboutme />
          <Myskills />
          <Contact />
        </div>
      }
    </div>
  )
}
