import { motion } from "framer-motion"
import { androidSVG, reactPath, kitchenSVG, certificateSVG, frontTeamSVG, backTeamSVG } from '../imagesExports'
import { certificate } from './certificateSVG'
import { computer } from './computerSVG'
import { signature } from './signatureSVG'
import { javaSVG } from './javaSVG'

const svgVariants = {
    hidden: { rotate: -180 },

    visible: {
        rotate: 0,
        transition: {
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
}


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



const reactSVG = <motion.div className="motion-SVG">
    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="-10 0 300 300"

        variants={svgVariants}
        initial="hidden"
        animate="visible"
    >
        <motion.path d={reactPath}
            variants={pathVariants}
            fill="transparent"
            strokeWidth="2"
            stroke="black"
            strokeLinecap="round"
        />
    </motion.svg>
</motion.div>



const holder = <motion.div>
    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"

        variants={svgVariants}
        initial="hidden"
        animate="visible"
    >

    </motion.svg>
</motion.div>



//team SVG

const backTeamVariants = {
    hidden: {
        x: [-20, 30]

    },

    visible: {
        rotate: 0,
        x: 0,
        transition: {
            duration: 19,
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
}


const frontTeamVariants = {
    hidden: { x: [-120, 90] },

    visible: {
        x: -100,
        transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
        }
    },
}
const team = <motion.div className="motion-SVG">
    <motion.img className="pictureSVG"
        src={backTeamSVG}

        variants={backTeamVariants}
        initial="hidden"
        animate="visible"
    />

    <motion.img className="pictureSVG"
        src={frontTeamSVG}

        variants={frontTeamVariants}
        initial="hidden"
        animate="visible"
    />
</motion.div>


const secondSVG = <motion.div>
    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"

        variants={svgVariants}
        initial="hidden"
        animate="visible"
    >
        <motion.path d={reactPath}
            variants={pathVariants}
            fill="transparent"
            strokeWidth="1"
            stroke="black"
            strokeLinecap="round"
        />
    </motion.svg>
</motion.div>

export { reactSVG, signature, computer, team, certificate, javaSVG }