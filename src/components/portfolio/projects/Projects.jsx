
import {
    graphicsGallery, certificatesGallery, mobileGallery, websiteGallery,

    //filler images
    rawGymImage, safriviewNoBgImage

} from './imagesData'
import {
    threejsIcon, sassIcon, reactIcon, expressIcon, figmaIcon, javaIcon, JoomlaIcon, JqueryIcon, kotlinIcon, mongoIcon, nodejsIcon, phpIcon, sqlIcon, WordPressIcon, framerIcon, firebaseIcon, cSharpIcon
} from './projectIcons'

import { Link } from 'react-router-dom'
//used at info 3
import Gallery from './gallery'
import './projects.scss'


import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { initialValue, transitionValue } from '../animation'


const Projects = () => {


    const buttonVarriant = {
        hidden: {
            x: -500,
        },

        visible: {
            x: 0,

            transition: {
                duration: 3,
            }
        }
    }

    const resumeButton = <div className='linkButton'>

        <Link to="/resume" className='linkButton'>Resume</Link>
    </div>;

    const seeMoreButton = <div className='linkButton'>
        <a href='https://github.com/BranTkS' className='linkButton'>see more</a>
    </div>;

    const androidStackList = <div className='top_list'>
        <h4>The tech incoperated</h4>
        <ul>
            <li>{javaIcon}java</li>
            <li>{firebaseIcon} firebase (authentication and storage)</li>
            <li>{kotlinIcon}Kotlin(*to a lesser extent*)</li>
        </ul>
    </div >

    const portfolioStack = <>
        <ul className='top_list'>
            <li>{reactIcon}React</li>
            <li>{threejsIcon}Threejs fibre </li>
            <li>{framerIcon}Framer motion</li>
            <li>{figmaIcon}Figma </li>
        </ul>
    </>

    const websiteStackList = <div className='website_stackList'>
        <h4>The tech stacks included</h4>
        <ul className='left_list'>
            <li>{mongoIcon}mongo db</li>
            <li>{expressIcon}ExpresJS</li>
            <li>{reactIcon} React</li>
            <li>{nodejsIcon}NodeJS</li>
            <li>{threejsIcon}Threejs fibre </li>
            <li>{sqlIcon}SQL</li>
            <li>{sassIcon}Sass </li>
            <li>{firebaseIcon} firebase</li>
        </ul>

        <ul className='right_list'>
            <li>{javaIcon}java</li>
            <li>{cSharpIcon}C#</li>
            <li>{phpIcon}PHP</li>
            <li>{JqueryIcon}Jquery</li>
            <li>{framerIcon}Framer motion</li>
            <li>{figmaIcon}Figma</li>
            <li>{WordPressIcon}WordPress </li>
            <li>{JoomlaIcon}Joomla *to a lesser extent* </li>
        </ul>

    </div>


    const projectsData = [
        {
            headImg: <Gallery
                graphicsGallery={certificatesGallery}
            />,
            title: 'Certifications',
            infoTitle: 'Thanks to my love for learning...',
            info: <p className='first_paragraph'> Beyond my diploma for IT from UNISA, I also completed the Umuzi java bootcamp and came out among the top students to be selected for the program, guaranteeing that as a baseline, I have a very strong understanding of the fundamentals of OOP.</p>,

            infoTitle2: 'I also participated in...',
            info2: <p className='second_paragraph'>Andelas android development programs and React development program and in both I reached the end by beating tens of thousands of students to reach the final thousand. I also took a few extra courses to sharpen skills and learn new languages.</p>,

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
            info: <div className='project_text'><div className='website_tagline'><p >This very website which I made using </p>{portfolioStack}</div> <p className='website_paragraph'>Several websites which I created during my freelance carreer, including a website for a gym{rawGymImage}, multiple blogs, portfolios, several construction companies, restaurants, a consultancy and an online news site{safriviewNoBgImage}. I also occasionally worked in teams where I worked on various components of websites </p>{websiteStackList}</div>,



            infoTitle2: 'Android apps I worked on include...',
            info2: <div className='project_text'><p className='website_paragraph'>Small projects like a travel deals application, a notepad application as well as a few projects for courses, such as a school registration app for which we worked in teams. </p>{androidStackList}<p className='exit_paragraph'>I also created a club management system using C# (Visual basic). see their repos below.</p></div>,
            info3: <Gallery
                graphicsGallery={mobileGallery}
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
            info: <p>Logos, banners, fliers and any necessary design work for clients as well as some video editing. I`&apos;`ve learned to use many tools, applications and resources to get the job done. Check the links below to see more Project samples.</p>,
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
                    <motion.h2 className="ProjTitle">
                        {projectsData.title}
                    </motion.h2>

                    <fragment className="head-image">{projectsData.headImg}</fragment>

                    <motion.h3 className="info-title">{projectsData.infoTitle}</motion.h3>
                    <motion.div className="info-one">{projectsData.info}</motion.div>

                    <fragment className="second-gallery">{projectsData.info3}</fragment>
                    <motion.h3 className="info-title-two">{projectsData.infoTitle2}</motion.h3>
                    <motion.div className="info-two">{projectsData.info2}</motion.div>

                    <motion.div className="projectButtons">
                        <motion.div>
                            <motion.div
                                className='linkButton'>
                                <motion.div className='remove-padding-margin'

                                    variants={buttonVarriant}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={{
                                        scale: 1.1,
                                        x: 20,
                                        boxShadow: "1px 0px 0px #FD02D7",
                                        textShadow: "0px 0px 7px 0px",
                                    }}>
                                    <a href={projectsData.repo} className='linkButton'>repo</a>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <motion.div >
                            <motion.div className='remove-padding-margin'

                                variants={buttonVarriant}
                                initial="hidden"
                                animate="visible"
                                whileHover={{
                                    scale: 1.1,
                                    x: 20,
                                    boxShadow: "1px 0px 0px #FD02D7",
                                    textShadow: "0px 0px 7px 0px",
                                }}>
                                {projectsData.url}
                            </motion.div>
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
