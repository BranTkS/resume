import { useState } from 'react'
import imgTbs from '../../../assets/images/TBS.jpg'

const HeadImage = () => {


    function loaded() {
        setShowImg("TBS")
    }

    const [showImg, setShowImg] = useState("loadingTBS");

    return (
        <div className='bkgLoad'>
            <img src={imgTbs} alt="Tanaka picture" className={showImg} loading='lazy' onLoad={loaded} />
        </div>
    )

}

export default HeadImage;