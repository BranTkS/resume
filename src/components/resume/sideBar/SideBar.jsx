import HeadImage from "./HeadImage";
import Skills from "./Skills"
import './SideBar.scss'
import WorkRefernce from "./WorkReferences";
import { Link } from 'react-router-dom'

const SideBar = (TBSImage) => {

    return (
        <div className="sideBar">
            <HeadImage TBSImage={TBSImage} />
            <div className="sidebarText">
                <Skills />
                <WorkRefernce />
            </div>
            <Link to="/" id='resume_back_button' className='linkButton'>Back</Link>
        </div>
    )
}

export default SideBar;