import tanVid from '../../../assets/videos/profileVideo.mp4'
import tanLogo from '../../../assets/images/images/nobg-BTSlogo.png'

import { motion } from "framer-motion"
import { signature } from './svgFiles/aboutSVGs'




const videoVariants = {
    hidden: {

    },

    visible: {
        scale: 1.1,

        transition: {
            duration: 1,
            delay: 5,
        }
    },
}

const heroVideo = <motion.div className='hero-video'>

    {signature}
    <motion.video

        variants={videoVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
            scale: 1.1,
            x: 20,
            boxShadow: "1px 0px 3px black, 2px 0px 0px #FD02D7",
        }}

        src={tanVid} className='profileVideo' loop autoPlay={true} muted={true} />
</motion.div>

const branLogo =
    <motion.div className="tanLogo">
        <img src={tanLogo} alt="Logo" className="tanLogo" />
    </motion.div>

export { heroVideo };