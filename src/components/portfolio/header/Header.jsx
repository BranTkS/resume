import './header.scss'

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { initialValue, transitionValue } from '../animation'
import { Link } from 'react-scroll'

import { heroPhoto } from '../imagesExports'



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
                <motion.div className='hero-image-container absolute-centered'>
                    <Link className='linkButton' to="about" spy={true} smooth={true} offset={0} duration={500}>
                        <motion.img src={heroPhoto} alt="Hero photo"
                            className='profile-image'

                            variants={videoVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{
                                scale: 1.1,
                                x: 20,
                                boxShadow: "1px 0px 3px black, 2px 0px 0px #FD02D7",
                            }}
                        />
                    </Link>
                </motion.div>
                <motion.div className='heroText absolute-centered'>
                    <motion.div className='hero-title'>
                        <motion.h1 className='hero-name'

                        >TANA
                            <motion.div
                                className='animated-letter'>
                                <motion.div
                                    className='animated-letter'>
                                    K
                                </motion.div>
                            </motion.div>

                            A B <motion.h1 className=' shumba remove-padding-margin'>SHUMBA</motion.h1 >
                        </motion.h1>
                    </motion.div>

                    <motion.div className='line1'>
                        <h2>Welcome</h2>
                    </motion.div>

                    <motion.div className='line2'>
                        <h2> welcome</h2>
                    </motion.div>
                    <motion.div className='line3'>
                        <h2> welcome</h2>
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
                                //boxShadow: "1px 0px 0px #FD02D7",
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
