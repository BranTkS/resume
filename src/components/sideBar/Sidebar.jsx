import HeadImage from "./HeadImage";
import Skills from "./Skills"
import './SideBar.css'
import WorkRefernce from "./WorkReferences";

const SideBar = (TBSImage) => {

    return (
        <div className="sideBar">
            <HeadImage TBSImage = {TBSImage}/>
            <div className="sidebarText">
            <Skills/>
            <WorkRefernce/>
            </div>
        </div>
    )
}

export default SideBar;