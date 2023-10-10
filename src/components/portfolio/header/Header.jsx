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


    const buttonVarriant = {
        hidden: {
            x: -500,
        },

        visible: {
            x: 0,

            transition: {
                duration: 3,
            }
        }
    }

    const headerVariant = {
        yellow: {

        },
        visible: {

            transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 3,
            }
        }
    }


    const videoVariants = {
        hidden: {

        },

        visible: {
            scale: 1.1,

            transition: {
                duration: 1,
                delay: 5,
            }
        },
    }

    useEffect(() => {
        if (inView) {
            mainControls.start({
                opacity: 1, y: 0,
            });
        } else {
            mainControls.start(initialValue);
        }

        console.log("check 1", inView)

    }, [inView]);


    return (
        <section id="header" ref={ref}>
            <motion.div className='hero'

                initial={initialValue}
                animate={mainControls}
                transition={transitionValue}
            >
                <motion.div className='heroImage'>
                    <motion.video

                        variants={videoVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{
                            scale: 1.1,
                            x: 20,
                            boxShadow: "1px 0px 3px black, 2px 0px 0px #FD02D7",
                        }}

                        src={tanVid} className='profileVideo' loop autoPlay={true} muted={true} />
                </motion.div>
                <motion.div className='heroText'>
                    <motion.div>
                        <motion.h1 className='hero-name'

                        >TANA
                            <motion.div
                                className='animated-letter'>
                                <motion.div
                                    className='animated-letter'>
                                    K
                                </motion.div>
                            </motion.div>

                            A B <h1>SHUMBA</h1>
                        </motion.h1>
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



                    <motion.div className='linkButton'

                    >
                        <motion.div className='remove-padding-margin'

                            variants={buttonVarriant}
                            initial="hidden"
                            animate="visible"
                            whileHover={{
                                scale: 1.1,
                                x: 20,
                                boxShadow: "1px 0px 0px #FD02D7",
                                textShadow: "0px 0px 7px 0px",
                            }}>
                            <Link className='linkButton' to="about" spy={true} smooth={true} offset={0} duration={500}>Know more</Link>
                        </motion.div>
                    </motion.div>

                </motion.div>
            </motion.div>
        </section>
    )
}

export default Header;
