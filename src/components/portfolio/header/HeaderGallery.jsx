import './headerGallery.scss'
import { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"


const HeaderGallery = (welcomeGallery) => {


    const GraphicsData = Array.from(welcomeGallery.welcomeGallery)

    const [welcomeWidth, setWelcomeWidth] = useState(0);
    const gallery = useRef();

    useEffect(() => {
        setWelcomeWidth(gallery.current.scrollWidth - gallery.current.offsetWidth);
    }, [])


    const Galleryvariant = {
        galleryRoll: {
            x: -welcomeWidth,

            transition: {
                x: {
                    duration: 37,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                },

            }

        },
    }


    const galleryMap = GraphicsData.map((graphicsMap) => {

        return (
            <span key={graphicsMap.id}>
                <h2>{graphicsMap.h2Welcome}</h2>
            </span>

        )
    })


    return (
        <motion.div className='art' >

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
                            left: -welcomeWidth
                        }}

                        variants={Galleryvariant}
                        animate="galleryRoll"
                    >
                        {galleryMap}

                    </motion.div>
                </motion.div>

            </motion.div>
        </motion.div >
    )
}

export default HeaderGallery
