import graphics from '../../../assets/images/images/graphics.jpg'
import websites from '../../../assets/images/images/websites.jpg'
import appImg from '../../../assets/images/images/app.jpg'
import { graphicsGallery, certificatesGallery, repoFilesGallery } from './imagesData'


//used at graphic design info 3
import Gallery from './gallery'
import './projects.scss'


import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { initialValue, transitionValue } from '../animation'




const Projects = () => {

    const projectsData = [
        {
            img: appImg,
            title: 'Android and VB.NET apps',
            info: 'I created an android app that allows you to see deals from various travel agents. It uses firebase database and Google authentication.',
            info2: 'I also created a club management system using Visual basic.NET. Below are links to my github containing their code.',
            info3: '',
            url: 'https://github.com/BranTkS',
            repo: 'https://github.com/BranTkS/travel-deals-app', // if no repo, the button will not show up
        },
        {
            img: websites,
            title: 'Full Stack website development',
            info: 'I created many websites over the years using react, WordPress and JavaScript. I freelanced several websites including a website for a gym, a construction company, a restaurant and my biggest project to date was a news site with multiple writers, subscriptions and sections.',
            info2: '',
            info3: '',
            url: 'https://github.com/BranTkS',
            repo: 'https://github.com/BranTkS/Excercise-logger', // if no repo, the button will not show up
        },
        {
            img: '',
            title: 'Graphic design',
            info: "I design advertising, logos, banners, and fliers as well as video editing for clients. I've learned to use many tools, applications and softwares to get the job done. Check the links below to see more Project samples.",
            info2: '',
            info3: <Gallery
                graphicsGallery={graphicsGallery}
            />,

            url: 'https://www.deviantart.com/brantshumba',
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

                    <a href={projectsData.repo} target='_blank' rel='noopener noreferrer'>
                        <img src={projectsData.img} className='portfolioPic' />
                    </a>
                    <>{projectsData.info3}</>

                    <motion.p>{projectsData.info}</motion.p>
                    <p>{projectsData.info2}</p>

                    <motion.div className="projectButtons">
                        <motion.div className="col-md-2">
                            <div className='linkButton'>
                                <a href={projectsData.repo} className='linkButton'>repo</a>
                            </div>
                        </motion.div>
                        <motion.div className="col-md-3">
                            <div className='linkButton'>
                                <a href={projectsData.url} className='linkButton'>see more</a>
                            </div>
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
        <section className="projects" ref={ref}>

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
