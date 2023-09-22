
import { deviantartSVG, githubSVG, linkedinSVG } from '../imagesExports'

const Footer = () => {


    return (
        <div id="footer">
            <div className="footerIcons">
                {linkedinSVG}
                {githubSVG}
                {deviantartSVG}

                <div className="copyRight"> © {new Date().getFullYear()} - developed by Tanaka Brandon Shumba</div>
            </div>





        </div>
    )
}

export default Footer;
