import tanVid from '../../assets/videos/profileVideo.mp4'
import tanLogo from '../../assets/images/images/nobg-BTSlogo.png'

const Header = () => {
    return (
        <section id="header">
            <div className='hero'>
                <div className='heroImage'>
                    <video src={tanVid} className='profileVideo' loop autoPlay={true} muted={true} />
                </div>
                <div className='heroText'>
                    <div>
                        <h1 className='heroName'>Tanaka B Shumba
                        </h1>
                    </div>
                    <div className="tanLogo">
                        <img src={tanLogo} alt="Logo" className="tanLogo" />
                    </div>
                    <div className='brokenIce'>
                        <h2 className='title'>
                            <div className='line1'>
                                <h2>Now that</h2>
                            </div>
                            <div className='line2'>
                                <h2> we&apos;ve</h2>
                            </div>
                            <div className='line3'>
                                <h2> broken the ice</h2>
                            </div>
                        </h2>
                    </div>

                    <div className='hiText'>
                        <p>Hi, my name is Tanaka Brandon Shumba
                            I&apos;m a web and software Developer.
                        </p>
                    </div>



                    <div className='linkButton'>
                        <a className='linkButton'>Know more</a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Header;
