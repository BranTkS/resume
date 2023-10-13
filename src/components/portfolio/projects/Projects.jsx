import graphics from '../../../assets/images/images/graphics.jpg'
import websites from '../../../assets/images/images/websites.jpg'
import appImg from '../../../assets/images/images/app.jpg'
import { graphicsGallery, certificatesGallery, repoFilesGallery, websiteGallery } from './imagesData'

import { Link } from 'react-router-dom'
//used at info 3
import Gallery from './gallery'
import './projects.scss'


import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { initialValue, transitionValue } from '../animation'


const Projects = () => {

    const resumeButton = <div className='linkButton'>
        <Link to="/resume" className='linkButton'>Resume</Link>
    </div>;

    const seeMoreButton = <div className='linkButton'>
        <a href='https://github.com/BranTkS' className='linkButton'>see more</a>
    </div>;

    const androidStackList = <>
        <h4>The tech incoperated</h4>
        <ul>
            <li>java</li>
            <li>firebase (authentication and storage)</li>
            <li>Kotlin(*to a lesser extent*)</li>
        </ul>
    </>

    const portfolioStack = <>
        <ul>
            <li>React</li>
            <li>Threejs fibre </li>
            <li>Framer motion</li>
            <li>Figma </li>
        </ul>
    </>

    const websiteStackList = <>
        <h4>The tech stacks included</h4>
        <ul>
            <li>Mongo db</li>
            <li>ExpresJS</li>
            <li>React</li>
            <li>node</li>
            <li>Threejs fibre </li>
            <li>SQL</li>
            <li>PHP</li>
            <li>Jquery</li>
            <li>Framer motion</li>
            <li>Figma</li>
            <li>WordPress </li>
            <li>Joomla *to a lesser extent* </li>
            <li>Sass </li>
        </ul>
    </>


    const projectsData = [
        {
            headImg: <Gallery
                graphicsGallery={certificatesGallery}
            />,
            title: 'Certifications',
            infoTitle: 'Thanks to my love for learning...',
            info: ' Beyond my diploma for IT from UNISA, I also completed the Umuzi java bootcamp and came out among the top students to be selected for the program.',

            infoTitle2: 'I also participated in...',
            info2: 'Andelas android development programs and React development program and in both I reached the end by beating tens of thousands of students to reach the final thousand. I also took a few extra courses to sharpen skills and learn new languages.',

            info3: '',
            url: resumeButton,
            repo: '',
        },

        {
            headImg: <Gallery
                graphicsGallery={websiteGallery}
            />,
            title: 'Repo websites and applications',
            infoTitle: 'Websites I made include...',
            info: <>This very website which i made using ` + {portfolioStack} + `In my freelance carrer I created several websites including a website for a gym, multiple blogs, portfolios, several construction companies, restaurants, a consultancy and an online news site. I also occasionally worked in teams where I worked on various components of websites ${websiteStackList}</>,



            infoTitle2: 'Android apps I worked on include...',
            info2: `Small projects like a travel deals application, a notepad application as well as a few projects for courses, such as a school registration app for which we worked in teams. ${androidStackList}I also created a club management system using C# (Visual basic). see their repos below.`,
            info3: <Gallery
                graphicsGallery={repoFilesGallery}
            />,
            url: seeMoreButton,
            repo: 'https://github.com/BranTkS/travel-deals-app', // if no repo, the button will not show up
        },

        {
            headImg: <Gallery
                graphicsGallery={graphicsGallery}
            />,
            title: 'Graphic design',
            infoTitle: 'I designed...',
            info: "Logos, banners, fliers and any necessary design work for clients as well as some video editing. I've learned to use many tools, applications and resources to get the job done. Check the links below to see more Project samples.",
            info2: '',
            info3: '',

            url: seeMoreButton,
            repo: 'https://www.deviantart.com/brantshumba', // if no repo, the button will not show up
        },
    ];


    const Allprojects = projectsData.map((projectsData) => {

        return (

            <div key={projectsData.title}>
                <motion.div className="projects-grid-container">
                    <motion.h1 className="ProjTitle">
                        {projectsData.title}
                    </motion.h1>

                    <fragment className="head-image">{projectsData.headImg}</fragment>

                    <motion.h3 className="info-title">{projectsData.infoTitle}</motion.h3>
                    <motion.p className="info-one">{projectsData.info}</motion.p>

                    <fragment className="second-gallery">{projectsData.info3}</fragment>
                    <motion.h3 className="info-title-two">{projectsData.infoTitle2}</motion.h3>
                    <motion.p className="info-two">{projectsData.info2}</motion.p>

                    <motion.div className="projectButtons">
                        <motion.div>
                            <motion.div className='linkButton'>
                                <a href={projectsData.repo} className='linkButton'>repo</a>
                            </motion.div>
                        </motion.div>
                        <motion.div >
                            {projectsData.url}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>)

    })

    const inviewAttributes = [{ threshold: 0.4 }]
    const mainControls = useAnimation();
    const { ref, inView } = useInView(inviewAttributes)

    useEffect(() => {
        if (inView) {
            mainControls.start({
                opacity: 1, y: 0,
            });
        } else {
            mainControls.start(initialValue);
        }

        console.log("check 1", inView)

    }, [inView])


    return (
        <section id="projects" ref={ref}>

            <motion.div

                initial={initialValue}
                animate={mainControls}
                transition={transitionValue}
            >
                <h1 className='title'>PROJECTS</h1>

                <div>
                    {Allprojects}
                </div>
            </motion.div>

        </section>
    )
}

export default Projects;
