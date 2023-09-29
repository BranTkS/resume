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


            //svg animation
            let path = document.querySelector('path');
            let pathLength = path.getTotalLength();

            path.style.strokeDasharray = pathLength + '' + pathLength;

            path.style.strokeDashoffset = pathLength;

            window.addEventListener('scroll', () => {
                var scrollPercantage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

                var drawLength = pathLength + scrollPercantage;

                path.style.strokeDashoffset = pathLength - drawLength;
            })
        } else {
            mainControls.start(initialValue);
        }

        console.log("check 1", inView)

    }, [inView])

    useEffect(() => {

    }, [])

    return (
        <section id="about" ref={ref}>

            <div className='lineSVG'>

                <svg viewBox="0 0 891 1978" fill="none" preserveAspectRatio='xMidYMax meet'>
                    <path d="M7 2H883M719 3V275M149 277H718M149 278V511M149 513H705.5C708.123 513 706.987 546.126 707 547V692M708 694H156V917M157 918H733M734 918V1211M166 1212H732M165 1213V1488M166 1490H732M733 1491V1816.33C733 1822.58 723.591 1819.84 719 1820M718 1821V1900C721.053 1900 742.972 1897.89 744 1902M744 1903V1952.5C744 1956.88 741.986 1975 746 1976M2 1976H889" stroke="black" strokeWidth="3" strokeLinecap="round" />
                </svg>

            </div>

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