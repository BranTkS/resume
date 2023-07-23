import imgTbs from '../../assets/images/TBS.jpg'

const HeadImage = () => {

    return(
        <div className='bkgLoad'>
        <img src={imgTbs} alt ="Tanaka picture" className="TBS" loading='lazy'/>
        </div>
    )

}

export default HeadImage;