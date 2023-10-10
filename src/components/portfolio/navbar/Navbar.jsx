import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { blackMenu, colorMenu, AboutBlack, aboutLogo, projectBlack, projectColor, contactBlack, contactColor } from '../imagesExports'
import tanLogo from '../../../assets/images/images/nobg-BTSlogo.png'
import './navbar.scss'

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const [windowSize, setWindowSize] = useState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
    })

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
                        <img src={blackMenu} alt="" onClick={() => {
                            setOpen(!open)
                        }}
                        />
                    </a>
                    {open && navMenu()}
                </>
            )
        }
    }

    const navMenu = () => {
        return (
            <nav className='navbar'>
                <ul className='nav'>
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

                                <img src={AboutBlack} alt="about me" className="navIcon" />
                                <p>About me</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                            < div className='navLink'>

                                <img src={projectBlack} alt="projects" className="navIcon" />
                                <p>Projects</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                            < div className='navLink'>
                                <img src={contactBlack} alt="contact me" className="navIcon" />
                                <p> Contact me</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                            < div className='navLink'>
                                <img src={contactBlack} alt="contact me" className="navIcon" />
                                <p> brantshumba@gmail.com</p>
                            </div>
                        </Link>
                    </li>

                </ul>
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
