import { Link } from 'react-router-dom'
import './aboutMe.scss'

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { initialValue, transitionValue } from '../animation'

const AboutMe = () => {

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
        <section id="about" ref={ref}>


            <motion.div className='aboutBody'

                initial={initialValue}
                animate={mainControls}
                transition={transitionValue}
            >
                <h1 className='title'>ABOUT ME</h1>
                <div>
                    <div className='left'>
                        <p>
                            I am driven and enthusiastic, and I want to transition from a successful career in the restaurant industry to a dynamic and more challenging role in IT. I hope to further improve my skills so I can contribute to a collaborative team environment, and engage with a team dedicated to innovation.
                        </p>
                    </div>


                    <div>
                        <div className='snippets'>
                            <div className='right'>
                                <p>
                                    I assisted in the opening of three restaurant locations and trained numerous team members, primarily for management roles and service roles.
                                </p>
                            </div>

                            <div className='left'>
                                <p>
                                    I worked with diverse groups to make my store the best performing amongst our chain.
                                </p>
                            </div>

                            <div className='right'>
                                <p>
                                    Accomplished in various roles within the restaurant industry, exemplifying my ability to excel in dynamic environments and work efficiently.
                                </p>
                            </div>

                            <div className='left'>
                                <p>
                                    Thanks to my hardworking nature and all the traits already mentioned I advanced to assistant manager and manager positions in a short span of time and at a young age.
                                </p>
                            </div>

                            <div className='right'>
                                <p>
                                    I Thrive in high-pressure settings, and I maintain a friendly, team-oriented mentality, I hope these  qualities will translate well to the demands of the IT industry.
                                </p>
                            </div>

                            <div className='left'>
                                <p>
                                    Due to my desire to continually learn and improve, I have been learning and mastering new languages and technologies through various courses and programs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <p>continue below to find out more about me and my projects.
                </p>

                <br />
                <div className='linkButton'>
                    <Link to="/resume" className='linkButton'>Resume</Link>
                </div>
            </motion.div>
        </section >
    )
}

export default AboutMe;