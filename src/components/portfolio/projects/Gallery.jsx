import tanLogo from '../../../assets/images/images/nobg-BTSlogo.png'
import circleImg from '../../../assets/images/gallery/circleLogo.jpg'
import pgb from '../../../assets/images/gallery/pgb.jpg'
import blueYellow from '../../../assets/images/gallery/blueYellow.jpg'
import purpleArrow from '../../../assets/images/gallery/purpleArrow.png'

import { motion } from "framer-motion"
import './gallery.scss'
import { useEffect, useRef, useState } from 'react'


//art gallery
//let scrollContainer = document.querySelector(".artGallery")
//let backBtn = document.getElementsByClassName("backButton");
// let nextBtn = document.getElementsByClassName("nextButton");



const Gallery = () => {

    const [width, setWidth] = useState(0);
    const gallery = useRef();

    useEffect(() => {
        setWidth(gallery.current.scrollWidth - gallery.current.offsetWidth);
    }, [])

    return (
        <motion.div className='art'>

            <motion.div className='artGalleryWrap'

            >

                <motion.div className='artGallery'
                    ref={gallery}
                >
                    <motion.div
                        drag='x'
                        whileTap={{ cursor: "grabbing" }}
                        dragConstraints={{
                            right: 0,
                            left: -width
                        }}
                    >
                        <span>
                            <img src={circleImg} alt='Circle image' />
                        </span>
                        <span>
                            <img src={pgb} alt='purple green blue image' />
                        </span>
                        <span>
                            <img src={blueYellow} alt='blueYellow' />
                        </span>
                        <span>
                            <img src={purpleArrow} alt='Purple Arrow image' />
                        </span>
                        <span>
                            <img src={tanLogo} alt='Circle image' />
                        </span>
                        <span>
                            <img src={pgb} alt='pgb image' />
                        </span>
                        <span>
                            <img src={blueYellow} alt='blueYellow' />
                        </span>
                        <span>
                            <img src={purpleArrow} alt='Purple Arrow image' />
                        </span>
                    </motion.div>
                </motion.div>

            </motion.div>
        </motion.div>
    )
}

export default Gallery
