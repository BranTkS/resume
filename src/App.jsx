import './App.scss'
import FullResume from './components/FullResume'
import RenderScene from './components/canvasAnimation/RenderScene'
import Portfolio from './components/portfolio';

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
      <Route index element={<><Portfolio /> <RenderScene /></>} />
      <Route path="/resume" element={<FullResume />} />
    </Route>
  )
)

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
