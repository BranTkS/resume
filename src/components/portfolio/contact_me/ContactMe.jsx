import tanLogo from '../../../assets/images/images/nobg-BTSlogo.png'
import Footer from "./Footer";
import './contactMe.scss'

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { initialValue, transitionValue } from '../animation'

import emailjs from '@emailjs/browser';

const ContactMe = () => {

    const inviewAttributes = [{ threshold: 0.4 }]
    const mainControls = useAnimation();
    const { ref, inView } = useInView(inviewAttributes)

    const sendEmail = (e) => {
        e.preventDefault(import.meta.env.REACT_APP_PUBLIC_KEY);
        console.log(import.meta.env.REACT_APP_SERVICE_ID)
        emailjs.sendForm(
            import.meta.env.VITE_REACT_APP_SERVICE_ID,
            import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_REACT_APP_PUBLIC_KEY)
    };

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
                <motion.div className="contactLogo">
                    <img src={tanLogo} alt="Logo" />
                </motion.div>
                <motion.div className="contactForm">
                    <form onSubmit={sendEmail}>
                        <h2>send me a message</h2>
                        <label htmlFor="from_name">Email*</label>
                        <input type="email" name="from_name" id="from_name" className="text_field" required />
                        <label htmlFor="message">Message*:</label>

                        <textarea name="message" id="message" className="text_area" required></textarea>

                        <motion.button type="submit" className='linkButton' >
                            <a className='linkButton'>Send</a>
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>
            <Footer />
        </section>
    )
}

export default ContactMe;
