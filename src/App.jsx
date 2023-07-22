import './App.css'
import ContactDetails from './components/Contact-details'
import NameHeader from './components/nameHeader'
import SideBar from './components/sideBar/sidebar'
import TBSImage from './assets/images/TBS.jpg'

function App() {


  return (
    <>
      <div>
        <SideBar TBSImage = {TBSImage}/>
        <NameHeader/>
      <ContactDetails/>
       </div>
    </>
  )
}

export default App
