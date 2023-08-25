import { Link } from 'react-router-dom'

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

            <div>
                <h1 className='title'>ABOUT ME</h1>
                <p>I am hardworking, energetic, friendly and a team player. I work well under pressure and I am self motivated. I can multitask, in my previous job as an assistant manager I needed to be able to cover any role as well as do my own job at any given time.I am able manage myself when working remotely as evidenced by my time working remotely for Amazon customer service.These experiences also showed that I am good at multitasking and time management.</p>

                <p>I want to make a start in the IT industry which has been my dream since highschool, I currently have a scholarship through Google and Andela and I aim to complete in order to gain my Google certification.I want to grow in the IT industry so I can Widen my scope of IT skills.
                </p>

                <p>continue below to find out more about me and my projects.
                </p>

                <br />
                <div className='linkButton'>
                    <Link to="/resume" className='linkButton'>Resume</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;