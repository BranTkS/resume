import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { blackMenu, colorMenu, AboutBlack, aboutLogo, projectBlack, projectColor, contactBlack, contactColor } from '../imagesExports'
import tanLogo from '../../../assets/images/images/nobg-BTSlogo.png'
import './navbar.scss'

const Navbar = () => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        checkSize();
    }, [setOpen]);

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
                    <li className='navLink'>
                        <Link to="hero" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>
                            <img src={tanLogo} alt="Home" className="navIcon" />
                            Home
                        </Link>
                    </li>
                    <li className='navLink'>
                        <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                            <img src={AboutBlack} alt="about me" className="navIcon" />
                            About me
                        </Link>
                    </li>
                    <li className='navLink'>
                        <Link to="projects" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                            <img src={projectBlack} alt="projects" className="navIcon" />
                            Projects
                        </Link>
                    </li>
                    <li className='navLink'>
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>
                            <img src={contactBlack} alt="contact me" className="navIcon" />
                            Contact me
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
