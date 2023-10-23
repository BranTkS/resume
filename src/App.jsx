//import { useState } from 'react';
import './App.scss'
//import FullResume from './components/FullResume'
import RenderScene from './components/canvasAnimation/RenderScene'
import Portfolio from './components/portfolio';
import Navbar from './components/portfolio/navbar/navbar';

//import { useEffect } from 'react';
//import LoadingScreen from './components/LoadingScreen';


function App() {
  { /* const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);

  }, [])*/}

  return (
    <div>
      <div className="outerNavbar">
        <Navbar />
      </div>

      <Portfolio />
      <RenderScene />
    </div>
  )
}

export default App
