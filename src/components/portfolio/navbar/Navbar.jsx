import { useState } from 'react'
import './navbar.scss'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const checkSize = () => {
        console.log(window.innerWidth)
        if (window.innerWidth > 500) {
            return (
                navMenu()
            )
        }
        else {
            return (
                <>
                    <button className='nav-reveal-button' onClick={() => {
                        setOpen(!open)
                        console.log(open)
                    }}>
                        <a href='#'>click</a>
                    </button>
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
                        <a href='#'>Home</a>
                    </li>
                    <li className='navLink'>
                        <a href='#'>About me</a>
                    </li>
                    <li className='navLink'>
                        <a href='#'>Projects</a>
                    </li>
                    <li className='navLink'>
                        <a href='#'>Contact me</a>
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
