import tanLogo from '../../../assets/images/images/nobg-BTSlogo.png'
import Footer from "./Footer";
import './contactMe.scss'

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { initialValue, transitionValue } from '../animation'

const ContactMe = () => {

    const inviewAttributes = [{ threshold: 0.4 }]
    const mainControls = useAnimation();
    const { ref, inView } = useInView(inviewAttributes)

    useEffect(() => {
        if (inView) {
            mainControls.start({
                opacity: 1, y: 0,
            });
        } else {
            mainControls.start(initialValue);
        }

        console.log("check 1", inView)

    }, [inView])

    return (
        <section id="contact" ref={ref}>
            <motion.div className='spacer'

                initial={initialValue}
                animate={mainControls}
                transition={transitionValue}>
                <motion.h1 className='title'>CONTACT</motion.h1>
                Would you like to work with me? Awesome!
                <br />
                <motion.div className='linkButton'>
                    <a className='linkButton'>Let&apos;s Talk</a>
                </motion.div>
                <motion.div className="contactLogo">
                    <img src={tanLogo} alt="Logo" />
                </motion.div>
            </motion.div>
            <Footer />
        </section>
    )
}

export default ContactMe;
