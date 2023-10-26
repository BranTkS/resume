import { motion } from "framer-motion"
import { certificateSVG } from '../../imagesExports'

//certificate

const certificateVariants = {
    hidden: {
        scale: 1,
        y: 0,
    },

    visible: {
        scale: 1.5,
        y: 20,
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
}

const certificateVariants2 = {
    hidden: {
        scale: 1,
        y: 0,
    },

    visible: {
        scale: 1.5,
        y: 20,
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            delay: -0.5,
        }
    },
}

const certificateVariants3 = {
    hidden: {
        scale: 1,
        y: 0,
    },

    visible: {
        scale: 1.5,
        y: 20,
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            delay: -1,
        }
    },
}

const certificate = <motion.div className="motion-SVG">
    <motion.img className="pictureSVG"
        src={certificateSVG}

        variants={certificateVariants}
        initial="hidden"
        animate="visible"
    />

    <motion.img className="pictureSVG"
        src={certificateSVG}

        variants={certificateVariants2}
        initial="hidden"
        animate="visible"
    />

    <motion.img className="pictureSVG"
        src={certificateSVG}

        variants={certificateVariants3}
        initial="hidden"
        animate="visible"
    />
</motion.div>

export { certificate }