import AboutMe from "./about_me/AboutMe";
import ContactMe from "./contact_me/ContactMe";
import Header from "./header/Header";
import Projects from "./projects/Projects";

import './PortfolioBody.scss'
import { forwardRef, useRef } from "react";

const PortfolioBody = (props, headerRef, aboutRef, projectsRef, contactRef) => {


    return (

        <div id="portfolio">
            <div>
                < Header className='introAnimation' ref={headerRef} />
            </div>

            <div >
                < AboutMe className='introAnimation' ref={aboutRef} />
            </div>

            <div>
                < Projects className='introAnimation' ref={projectsRef} />
            </div>

            <div>
                < ContactMe className='introAnimation' ref={contactRef} />
            </div>
        </div>
    )
}

export default PortfolioBody;