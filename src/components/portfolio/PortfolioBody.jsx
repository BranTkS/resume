import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Header from "./Header";
import Projects from "./Projects";

import './PortfolioBody.scss'

const PortfolioBody = () => {

    return (

        <div id="portfolio">
            < Header />
            < AboutMe />
            < Projects />
            < ContactMe />
        </div>
    )
}

export default PortfolioBody;