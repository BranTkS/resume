import { motion } from "framer-motion"
import { computerSVG, kitchenSVG } from '../imagesExports'


const nestedText = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z" /> </svg>


const monitor = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z" /></svg>


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