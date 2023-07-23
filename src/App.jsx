import './App.scss'
import ResumeBody from './components/body/ResumeBody'
import SideBar from './components/sideBar/SideBar'

function App() {


  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-4">
          <SideBar />
        </div>
        <div className="col-8">
          <ResumeBody />
        </div>
      </div>
    </div>
  )
}

export default App
