import tanLogo from '../../../assets/images/images/nobg-BTSlogo.png'

import Footer from "./Footer";
import './contactMe.scss'

const ContactMe = () => {
    return (
        <section id="contact">
            <div className='spacer'>
                <h1 className='title'>CONTACT</h1>
                Would you like to work with me? Awesome!
                <br />
                <div className='linkButton'>
                    <a className='linkButton'>Let&apos;s Talk</a>
                </div>
                <div className="contactLogo">
                    <img src={tanLogo} alt="Logo" className="contactLogo" />
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default ContactMe;
