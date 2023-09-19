import { Link } from 'react-router-dom'
import './aboutMe.scss'

const AboutMe = () => {

    const sections = document.querySelectorAll('#about');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
                console.log(entries)
            })
        },
        { threshold: 0.5, }
    )

    sections.forEach(sections => { observer.observe(sections) }
    )

    return (
        <section id="about">


            <div className='aboutBody'>
                <h1 className='title'>ABOUT ME</h1>
                <div>
                    <div className='left'>
                        I am driven and enthusiastic, and I want to transition from a successful career in the restaurant industry to a dynamic and more challenging role in IT. I am eager to leverage my leadership, adaptability, and self-motivation foundations developed during years of managing and contributing to restaurant operations. I aim to transition my drive and capabilities into the IT sector, where I can further enhance my skills, contribute to a collaborative team environment, and engage with a team dedicated to innovation.
                    </div>


                    <div>
                        <div>

                            **Key Attributes:**
                        </div>

                        <div className='snippets'>
                            <div className='right'>
                                - **Passionate Learner:** Seeking an opportunity to immerse myself in the world of IT, expand my knowledge, and develop new skills.

                            </div>

                            <div className='left'>
                                - **Diverse Background:** Successfully managed various roles within the restaurant industry, exhibiting adaptability and an ability to excel in dynamic environments and work efficiently ultimately advancing to assistant manager and manager positions at a young age.
                            </div>

                            <div className='right'>

                                - **Proven Leadership:** Demonstrated leadership by successfully assisting in the opening of three restaurant locations and training numerous team members, primarily for management and service roles, highlighting my ability to manage and motivate diverse groups. I Thrived in high-pressure settings, making quick decisions, and maintaining a friendly, team-oriented mentality, qualities I hope will translate well to the demands of the IT industry

                            </div>

                            <div className='left'>
                                - **Resourceful Self-Starter:** Beyond formal education, pursued personal growth by learning and mastering new languages and technologies through self-guided courses and programs due to my desire to continually learn and improve.
                            </div>
                        </div>
                    </div>
                </div>

                <p>continue below to find out more about me and my projects.
                </p>

                <br />
                <div className='linkButton'>
                    <Link to="/resume" className='linkButton'>Resume</Link>
                </div>
            </div>
        </section >
    )
}

export default AboutMe;