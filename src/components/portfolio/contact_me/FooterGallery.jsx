import { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"


const FooterGallery = (welcomeGallery) => {


    const GraphicsData = Array.from(welcomeGallery.welcomeGallery)

    const [footerWidth, setFooterWidth] = useState(0);
    const gallery = useRef();

    useEffect(() => {
        setFooterWidth(gallery.current.scrollWidth - gallery.current.offsetWidth);
    }, [])


    const Galleryvariant = {
        galleryRoll: {
            x: -footerWidth,

            transition: {
                x: {
                    duration: 157,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "loop",
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
                            left: -footerWidth
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

export default FooterGallery
