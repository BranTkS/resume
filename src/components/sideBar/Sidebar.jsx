import HeadImage from "./HeadImage";
import Skills from "./Skills"

const SideBar = (TBSImage) => {

    return (
        <>
        <div className="sideBar">
            <HeadImage TBSImage = {TBSImage}/>
            <Skills/>
        </div>
        </>
    )
}

export default SideBar;