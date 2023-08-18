import tanVid from '../../assets/videos/profileVideo.mp4'

const Header = () => {
    return (
        <section id="header">
            <div>
                <h1 className='title'>Now that we&apos;ve broken the ice</h1>
            </div>
            <div>
                <video src={tanVid} className='profileVideo' loop autoPlay="true" muted="true" />
            </div>
            <div>
                Hi, my name is Brandon Shumba
                I&apos;m a web and software Developer.
                <br />

                <div className='linkButton'>
                    <a className='linkButton'>Know more</a>
                </div>
            </div>
        </section>
    )
}

export default Header;
