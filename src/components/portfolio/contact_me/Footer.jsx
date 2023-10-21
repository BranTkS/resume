
import { deviantartSVG, githubSVG, linkedinSVG } from '../imagesExports'

const Footer = () => {


    return (
        <div id="footer">
            <div className="footerIcons">
                {linkedinSVG}
                {githubSVG}
                {deviantartSVG}

                <div>some icons and svg&apos;s used are from  <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a> including <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/59952/sql">SQL</a>,

                    <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/11169/certificate">Certificate</a>,

                    <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/44770/workstation">Computer</a>,

                </div>
                <div className="copyRight"> © {new Date().getFullYear()} - developed by Tanaka Brandon Shumba</div>
            </div>





        </div>
    )
}

export default Footer;
