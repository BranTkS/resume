
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { initialValue, transitionValue } from '../animation'
import { androidSVG } from '../imagesExports'

const AboutImages = () => {

    const inviewAttributes = [{ threshold: 0.4 }]
    const mainControls = useAnimation();
    const { ref, inView } = useInView(inviewAttributes)

    useEffect(() => {
        if (inView) {
            mainControls.start({
                pathLength: 1,

                transition: {
                    duration: 20,
                    ease: "easeInOut"
                }
            });
        } else {
            mainControls.start(
                {
                    pathLength: 0,
                }
            );
        }

        console.log("check android", inView)

    }, [inView])

    useEffect(() => {

    }, [])

    const svgVariants = {
        hidden: { rotate: -180 },

        visible: {
            rotate: 0,
            transition: {
                duration: 3
            }
        },
    }

    const pathVariants = {
        hidden: {
            pathLength: 0,
        },

        visible: {
            mainControls
        }

    }


    const androidLogo = <motion.div>
        <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"

            variants={svgVariants}
            initial="hidden"
            animate="visible"


        >
            <motion.path ref={ref} d={androidSVG}
                variants={pathVariants}
                fill="transparent"
                strokeWidth="1"
                stroke="black"
                strokeLinecap="round"
            />
        </motion.svg>
    </motion.div>
    return (
        <div>

            {androidLogo}

        </div>
    )
}

export default AboutImages
