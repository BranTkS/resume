
import { deviantartSVG, githubSVG, linkedinSVG } from '../imagesExports'
import { endScroller } from './footerScrollerData'
import './footerScroller.scss'

const Footer = () => {


    return (
        <>
            <div id="footer">
                <div className="footerIcons">
                    {linkedinSVG}
                    {githubSVG}
                    {deviantartSVG}


                    <div>some icons and svg&apos;s used are from  <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a> including <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/59952/sql">SQL</a>,

                        <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/11169/certificate">Certificate</a>,

                        <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/44770/workstation">Computer</a>,

                        <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/44024/menu">Menu</a>,

                        <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/43969/about">About</a>,

                        <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/43988/code">Code</a>,

                        <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/9TWrjbfl_wCv/call-me">Call Me</a>

                    </div>
                    <div className="copyRight"> © {new Date().getFullYear()} - developed by Tanaka Brandon Shumba</div>
                </div>

            </div>
            <div id="bottomScroller">{endScroller}</div>
        </>
    )
}

export default Footer;
