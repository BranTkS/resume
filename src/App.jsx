import './App.scss'
import FullResume from './components/FullResume'
import RenderScene from './components/canvasAnimation/RenderScene'
import Portfolio from './components/portfolio';
import Navbar from './components/portfolio/navbar/navbar';

import { useRef } from "react";

import {
  createBrowserRouter,
  Route,
  Outlet,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom'

const returnPage = <main><Outlet /></main>;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={returnPage}>
      <Route index element=
        {
          <div>
            <div className="outerNavbar">
              <Navbar
                headerRef={App.headerRef}
                contactRef={App.contactRef}
              />
            </div>

            <Portfolio
              headerRef={App.headerRef}
              contactRef={App.contactRef} />
            <RenderScene />
          </div>
        }
      />
      <Route path="/resume" element={<FullResume />} />
    </Route>
  )
)

function App() {

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
