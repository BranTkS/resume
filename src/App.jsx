import './App.scss'
//import FullResume from './components/FullResume'
import RenderScene from './components/canvasAnimation/RenderScene'
import Portfolio from './components/portfolio';
import Navbar from './components/portfolio/navbar/navbar';

import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';


function App() {
  const [loading, setLoading] = useState(false);

  const pageLoaded = () => {
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true)
    if (document.readyState === "complete") {
      setLoading(false)
    } else {
      window.addEventListener("load", pageLoaded);


      return () => window.removeEventListener("load", pageLoaded)
    }

  }, [])


  return (
    <div>

      {!loading ? (
        <>
          <div className="outerNavbar">
            <Navbar />
          </div>

          <Portfolio />
          <RenderScene />
        </>
      ) : (

        <>
          <LoadingScreen />
        </>

      )}
    </div>
  )
}

export default App
