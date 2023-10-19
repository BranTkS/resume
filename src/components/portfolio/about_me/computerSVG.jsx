import { motion } from "framer-motion"
import { computerSVG } from '../imagesExports'

const pathVariants = {
    hidden: {
        pathLength: 0,
        opacity: 0.5,
    },

    visible: {
        pathLength: 1,
        opacity: 1,

        transition: {
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 5,
        }
    }
}

const nestedText = <motion.svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="pink" viewBox="0 0 16 16" className="pictureSVG"

    variants={pathVariants}
    strokeWidth="40"
    stroke="black"
    strokeLinecap="round"

> <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z" /> </motion.svg>


const monitor = <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"

><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z" /></motion.svg>


const computerVariants = {
    hidden: {
        scale: 1,
    },

    visible: {
        scale: 1.1,
        transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 10,
        }
    },
}

const computer = <motion.div className="motion-SVG">
    <motion.img className="pictureSVG"
        src={computerSVG} width={"200rem"}

        variants={computerVariants}
        initial="hidden"
        animate="visible"
    />

    {//nestedText
    }
</motion.div>

export { computer }