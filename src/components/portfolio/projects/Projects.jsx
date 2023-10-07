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


    const projectsData = [
        {
            headImg: <Gallery
                graphicsGallery={certificatesGallery}
            />,
            title: 'Certifications',
            info: 'Thanks to my love for learning, beyond my diploma for IT from UNISA, I also completed the Umuzi java bootcamp and came out among the top students to be selected for the program.',
            info2: 'I also participated in Andelas android development programs and React development program and in both I reached the end by beating tens of thousands of students to reach the final thousand. I also took a few extra courses to sharpen skills and learn new languages.',
            info3: '',
            url: resumeButton,
            repo: '',
        },

        {
            headImg: <Gallery
                graphicsGallery={websiteGallery}
            />,
            title: 'Repo websites and applications',
            info: 'android apps I worked on include a travel deals aplication, a notepad application as well as a few projects for courses and school, such as a school registration app for which we worked in teams and an unnecessary number of calculators all of which could easily be replaced with a google search. These appps incoperated firebase, Google authentication and were made using java. I also created a club management system using C# (Visual basic). see their repos below.',

            info2: 'Websites I made include this very website which i made using react, threejs fibre and framer motion. I also created many websites over the years using react, Mongo db,node,ExpresJS, PHP, jquery, SQL and WordPress. I also freelanced several websites including a website for a gym, portfolios, several construction companies and restaurants, a consultancy and my biggest project to date was an online news site. I also occasionally worked in teams where I worked on various aspects of websites',
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
            info: "I design advertising, logos, banners, and fliers as well as video editing for clients. I've learned to use many tools, applications and softwares to get the job done. Check the links below to see more Project samples.",
            info2: '',
            info3: '',

            url: seeMoreButton,
            repo: 'https://www.deviantart.com/brantshumba', // if no repo, the button will not show up
        },
    ];


    const Allprojects = projectsData.map((projectsData) => {

        return (

            <div className="projects" key={projectsData.title}>
                <motion.div className="container-fluid">
                    <motion.h1 className="ProjTitle">
                        {projectsData.title}
                    </motion.h1>

                    <>{projectsData.headImg}</>

                    <motion.p>{projectsData.info}</motion.p>

                    <>{projectsData.info3}</>
                    <p>{projectsData.info2}</p>

                    <motion.div className="projectButtons">
                        <motion.div className="col-md-2">
                            <div className='linkButton'>
                                <a href={projectsData.repo} className='linkButton'>repo</a>
                            </div>
                        </motion.div>
                        <motion.div className="col-md-3">
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
