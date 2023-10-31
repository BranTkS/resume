import './gallery.scss'
import { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"


const Gallery = (graphicsGallery) => {


    const GraphicsData = Array.from(graphicsGallery.graphicsGallery)

    const [width, setWidth] = useState(0);
    const gallery = useRef();

    useEffect(() => {
        setWidth(gallery.current.scrollWidth - gallery.current.offsetWidth);
    }, [])


    const Galleryvariant = {
        galleryRoll: {
            x: -width,

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
            <span key={graphicsMap.alt}>
                <img src={graphicsMap.galleryImage}
                    alt={graphicsMap.alt} />
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
                            left: -width
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

export default Gallery
