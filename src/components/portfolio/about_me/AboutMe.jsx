
import './aboutMe.scss'
import resumePdf from '../../Tanaka_B_Shumba_resume.pdf'

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { initialValue, transitionValue } from '../animation'
import { androidSVG, downloadIcon } from '../imagesExports';
import { heroVideo } from './branVideo';
import { reactSVG, computer, javaIcon, teamIcon, certificate } from './svgFiles/aboutSVGs'


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

    useEffect(() => {

    }, [])

    const svgVariants = {
        hidden: { rotate: -180 },

        visible: {
            rotate: 0,
            transition: {
                duration: 3,
            }
        },
    }

    const pathVariants = {
        hidden: {
            pathLength: 0,
        },

        visible: {
            pathLength: 1,

            transition: {
                duration: 15,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
            }
        }
    }

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

    return (

        <section id="about" ref={ref}>



            <motion.div className='aboutBody'

                initial={initialValue}
                animate={mainControls}
                transition={transitionValue}
            >
                <h1 className='title'>ABOUT ME</h1>
                <div>
                    <div className='center'>
                        {heroVideo}
                    </div>
                    <div className='center'>
                        <p>
                            I am driven and enthusiastic, I want to transition from a successful career in the restaurant industry to a dynamic and more challenging role in IT.</p>
                    </div>

                    <div className='center'>
                        <p>I hope to further improve my skills so I can contribute to a collaborative team environment, and engage with a team dedicated to innovation.
                        </p>
                    </div>


                    <div>
                        <div className='snippets'>
                            <div className='java_SVG'>
                                {javaIcon}
                            </div>
                            <div className='first_paragraph'>
                                <p>
                                    I completed umuzis java bootcamp and was among the top learners to pass through the bootcamp.
                                </p>
                            </div>

                            <div className='second_paragraph'>
                                <p>
                                    Created websites for clients and self education and participated in challenges to build react websites and android applications.
                                </p>
                            </div>
                            <div className='react_SVG'>
                                {reactSVG}
                            </div>
                            <div className='android_SVG'>
                                <motion.div>
                                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="5 0 55 55"

                                        variants={svgVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <motion.path d={androidSVG}
                                            variants={pathVariants}
                                            fill="transparent"
                                            strokeWidth="1"
                                            stroke="#EEAC07"
                                            strokeLinecap="round"
                                        />
                                    </motion.svg>
                                </motion.div>
                            </div>
                            <div className='third_paragraph'>
                                <p>
                                    Accomplished in various roles within the restaurant industry, exemplifying my ability to excel in dynamic environments and work efficiently.
                                </p>
                            </div>

                            <div className='fourth_paragraph'>
                                <p>
                                    Thanks to my hardworking nature  I advanced to assistant manager and manager positions in a short span of time and at a young age, where I trained numerous groups of diverse team members, primarily for management roles and service roles.
                                </p>
                            </div>
                            <div className='computer_SVG'>
                                {computer}
                            </div>
                            <div className='team_SVG'>
                                {teamIcon}
                            </div>
                            <div className='fifth_paragraph'>
                                <p>
                                    I Thrive in high-pressure settings, and I maintain a friendly, team-oriented mentality, I hope these  qualities will translate well to the demands of the IT industry.
                                </p>
                            </div>

                            <div className='sixth_paragraph'>
                                <p>
                                    Due to my desire to continually learn and improve, I have been learning and mastering new languages and technologies through various courses and programs.
                                </p>
                            </div>
                            <div className='certificate_SVG'>
                                {certificate}
                            </div>
                        </div>
                    </div>
                </div >

                <p>continue below to find out more about me and my projects.
                </p>

                <br />
                <div className='linkButton'>

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
                        { /*<Link /*target="_blank" rel="noreferrer" to="/resume" className='linkButton'>Resume</Link>*/
                        }
                        <a target="_blank" rel="noreferrer" href={resumePdf} download="Tanaka B Shumba resume" className='linkButton'>{downloadIcon}R&eacute;sum&eacute;</a>
                    </motion.div>
                </div>
            </motion.div>
        </section >
    )
}

export default AboutMe;