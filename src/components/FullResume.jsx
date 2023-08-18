
import ResumeBody from './resume/body/ResumeBody'
import SideBar from './resume/sideBar/SideBar'

const FullResume = () => {

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

export default FullResume;