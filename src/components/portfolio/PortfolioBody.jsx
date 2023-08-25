import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Header from "./Header";
import Projects from "./Projects";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

import './PortfolioBody.scss'
import { useEffect } from "react";

const PortfolioBody = () => {

    //const ref = useRef(null);
    const pageVariants = {
        hidden: {
            opacity: 0,
            y: 75
        },
        visible: {
            opacity: 1,
            y: 0,
            staggerChildren: 0.2

        }
    }
    const inviewAttributes = [{ threshold: 0.4 }]
    const mainControls = useAnimation();
    const mainControls2 = useAnimation();
    const mainControls3 = useAnimation();
    const mainControls4 = useAnimation();

    const { ref, inView } = useInView(inviewAttributes)
    const { ref: ref2, inView: inView2 } = useInView(inviewAttributes)
    const { ref: ref3, inView: inView3 } = useInView(inviewAttributes)
    const { ref: ref4, inView: inView4 } = useInView(inviewAttributes)


    useEffect(() => {
        if (inView) {
            mainControls.start({
                opacity: 1, y: 0,
            });
        } else {
            mainControls.start(initialValue);
        }

        if (inView2) {
            mainControls2.start({ opacity: 1, y: 0 });
        } else {
            mainControls2.start(initialValue);
        }

        if (inView3) {
            mainControls3.start({ opacity: 1, y: 0, staggerChildren: 0.2 });
        } else {
            mainControls3.start(initialValue);
        }

        if (inView4) {
            mainControls4.start({ opacity: 1, y: 0, staggerChildren: 0.2 });
        } else {
            mainControls4.start(initialValue);
        }
        console.log("check 1", inView)
        console.log("check 2", inView2)
        console.log("check 3", inView3)
        console.log("check 4", inView4)

    }, [inView, inView2, inView3, inView4])

    const initialValue = { opacity: 0, y: 75 };
    const transitionValue = {
        duration: 1,
        delay: 0.25,
        when: "beforeChildren"
    };

    return (

        <div id="portfolio">
            <div ref={ref}>
                <motion.div
                    initial={initialValue}
                    animate={mainControls}
                    transition={transitionValue}
                >
                    < Header className='introAnimation' />
                </motion.div>
            </div>

            <div ref={ref2}>
                <motion.div
                    initial={initialValue}
                    animate={mainControls2}
                    transition={transitionValue}>
                    < AboutMe className='introAnimation' />
                </motion.div>
            </div>

            <div ref={ref3}>
                <motion.div
                    initial={initialValue}
                    animate={mainControls3}
                    transition={transitionValue}>
                    < Projects className='introAnimation' />
                </motion.div>
            </div>

            <div ref={ref4}>
                <motion.div
                    initial={initialValue}
                    animate={mainControls4}
                    transition={transitionValue}>
                    < ContactMe className='introAnimation' />
                </motion.div>
            </div>
        </div>
    )
}

export default PortfolioBody;