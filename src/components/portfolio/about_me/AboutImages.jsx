
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { initialValue, transitionValue } from '../animation'
import { androidSVG } from '../imagesExports'

const AboutImages = () => {

    const inviewAttributes = [{ threshold: 0.4 }]
    const mainControls2 = useAnimation();
    const { ref2, inView2 } = useInView(inviewAttributes)

    useEffect(() => {
        if (inView2) {
            console.log("check view", inView2)
            mainControls2.start({
                pathLength: 1,
                rotate: 4,

                transition: {
                    duration: 20,
                    ease: "easeInOut"
                }
            });
        } else {
            mainControls2.start(
                {
                    pathLength: 0,
                }
            );
        }

        console.log("check android", inView2)

    }, [inView2])

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
            mainControls2
        }

    }


    const androidLogo = <motion.div ref={ref2}>
        <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"

            variants={mainControls2}
            initial="hidden"
            animate="visible"


        >
            <motion.path d={androidSVG}
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
