import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { initialValueFromLeft, transitionValue } from '../animation'

import { colorMenu, AboutColour, projectColor, contactColor } from '../imagesExports'
import tanLogo from '../../../assets/images/images/nobg-BTSlogo.png'
import './navbar.scss'

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [windowSize, setWindowSize] = useState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
    })

    const inviewAttributes = [{ threshold: 0.4 }]
    const mainControls = useAnimation();
    const { ref, inView } = useInView(inviewAttributes)

    //check if window size requires large navigation or small screen navigation
    const checkChange = () => {
        setWindowSize({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
        })
        checkSize();
    }

    useEffect(() => {
        window.addEventListener('resize', checkChange)

        return () => {
            window.removeEventListener('resize', checkChange)
        }
    }, [windowSize]);

    const closeMenu = () => {
        setOpen(false)
    }


    const checkSize = () => {
        if (window.innerWidth > 500) {
            return (
                navMenu()
            )
        }
        else {
            return (
                <>

                    <a className='nav-reveal-button' >
                        <img src={colorMenu} alt="" onClick={() => {
                            setOpen(!open)
                        }}
                        />
                    </a>
                    {open && navMenu()}
                </>
            )
        }
    }




    useEffect(() => {
        if (inView) {
            mainControls.start({
                opacity: 1, x: 0,
            });
        } else {
            mainControls.start(initialValueFromLeft);
        }

        console.log("check 1", inView)

    }, [inView, open]);

    const navMenu = () => {
        return (
            <nav className='navbar' ref={ref}>
                <motion.ul className='nav'

                    initial={initialValueFromLeft}
                    animate={mainControls}
                    transition={transitionValue}>
                    <li>
                        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
                            < div className='navLink'>

                                <img src={tanLogo} alt="Home" className="navIcon" />
                                <p>Home</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                            < div className='navLink'>

                                <img src={AboutColour} alt="about me" className="navIcon" />
                                <p>About me</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                            < div className='navLink'>

                                <img src={projectColor} alt="projects" className="navIcon" />
                                <p>Projects</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                            < div className='navLink'>
                                <img src={contactColor} alt="contact me" className="navIcon" />
                                <p> Contact me</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                            < div className='navLink'>
                                <p id='nav_email'> brantshumba@gmail.com</p>
                            </div>
                        </Link>
                    </li>

                </motion.ul>
            </nav>
        )
    }

    return (
        <div className='navWrap'>

            {checkSize()}

        </div>
    )
}

export default Navbar
