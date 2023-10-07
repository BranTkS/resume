import { motion } from "framer-motion"
import { computerSVG, kitchenSVG } from '../imagesExports'

const computerVariants = {
    hidden: {
        scale: 0.1,
        opacity: 0,
        y: 0,
    },

    visible: {
        scale: 1.5,
        opacity: 1,
        y: 30,
        transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 10,
        }
    },
}

const kitchenVariants = {
    hidden: {
        rotate: [0],
        scale: 1,
        x: -100,
        y: 100,
        opacity: 1,
    },

    visible: {
        scale: 0.1,
        x: -90,
        y: 0,
        rotate: [0, -120, 0, 120, 0],
        opacity: 1,
        transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 10,
        }
    },
}

const computer = <motion.div className="motion-SVG">
    <motion.img className="pictureSVG"
        src={computerSVG}

        variants={computerVariants}
        initial="hidden"
        animate="visible"
    />

    <motion.img className="pictureSVG"
        src={kitchenSVG}
        variants={kitchenVariants}
        initial="hidden"
        animate="visible"
    />
</motion.div>

export { computer }