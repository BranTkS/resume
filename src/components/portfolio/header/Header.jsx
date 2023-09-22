import tanVid from '../../../assets/videos/profileVideo.mp4'
import tanLogo from '../../../assets/images/images/nobg-BTSlogo.png'

import './header.scss'

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { initialValue, transitionValue } from '../animation'
import { Link } from 'react-scroll'



const Header = () => {

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
        <section id="header" ref={ref}>
            <motion.div className='hero'

                initial={initialValue}
                animate={mainControls}
                transition={transitionValue}
            >
                <motion.div className='heroImage'>
                    <video src={tanVid} className='profileVideo' loop autoPlay={true} muted={true} />
                </motion.div>
                <motion.div className='heroText'>
                    <motion.div>
                        <h1 className='heroName'>TANAKA B SHUMBA
                        </h1>
                    </motion.div>
                    <motion.div className="tanLogo">
                        <img src={tanLogo} alt="Logo" className="tanLogo" />
                    </motion.div>
                    <motion.div className='line1'>
                        <h2>Now that</h2>
                    </motion.div>
                    <motion.div className='line2'>
                        <h2> we&apos;ve</h2>
                    </motion.div>
                    <motion.div className='line3'>
                        <h2> broken the ice</h2>
                    </motion.div>

                    <motion.div className='hiText'>
                        <p>Hi, my name is Tanaka Brandon Shumba
                            I&apos;m a web and software Developer.
                        </p>
                    </motion.div>



                    <div className='linkButton'>
                        <Link className='linkButton' to="about" spy={true} smooth={true} offset={0} duration={500}>Know more</Link>
                    </div>

                </motion.div>
            </motion.div>
        </section>
    )
}

export default Header;
