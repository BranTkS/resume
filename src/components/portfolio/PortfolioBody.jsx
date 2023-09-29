import AboutMe from "./about_me/AboutMe";
import ContactMe from "./contact_me/ContactMe";
import Header from "./header/Header";
import Projects from "./projects/Projects";

import './PortfolioBody.scss'

const PortfolioBody = () => {


    return (

        <div id="portfolio">
            < Header className='introAnimation' />

            < AboutMe className='introAnimation' />

            < Projects className='introAnimation' />

            < ContactMe className='introAnimation' />
        </div>
    )
}

export default PortfolioBody;