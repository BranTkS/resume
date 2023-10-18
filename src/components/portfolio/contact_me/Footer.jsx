
import { deviantartSVG, githubSVG, linkedinSVG } from '../imagesExports'

const Footer = () => {


    return (
        <div id="footer">
            <div className="footerIcons">
                {linkedinSVG}
                {githubSVG}
                {deviantartSVG}

                <div>some icons and svg&aposs used are from  <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a> including <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/59952/sql">SQL</a></div>
                <div className="copyRight"> © {new Date().getFullYear()} - developed by Tanaka Brandon Shumba</div>
            </div>





        </div>
    )
}

export default Footer;
