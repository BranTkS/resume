import { useState } from 'react';
import './App.scss'
import FullResume from './components/FullResume'
import RenderScene from './components/canvasAnimation/RenderScene'
import Portfolio from './components/portfolio';
import Navbar from './components/portfolio/navbar/navbar';


import {
  createBrowserRouter,
  Route,
  Outlet,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom'
import { useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

const returnPage = <main><Outlet /></main>;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={returnPage}>
      <Route index element=
        {
          <div>
            <div className="outerNavbar">
              <Navbar />
            </div>

            <Portfolio />
            <RenderScene />
          </div>
        }
      />
      <Route path="/resume" element={<FullResume />} />
    </Route>
  )
)

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 10000);

  }, [])

  return (
    <div>
      {loading ?
        <LoadingScreen loading={loading} />
        :
        <RouterProvider router={router} />
      }
    </div>
  )
}

export default App
