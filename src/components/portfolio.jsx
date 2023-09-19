import PortfolioBody from "./portfolio/PortfolioBody";
import Navbar from "./portfolio/navbar/navbar";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

const Portfolio = () => {

    return (

        <div>
            <motion.div className="Navbar">
                <Navbar />
            </motion.div>
            <PortfolioBody /></div>
    )

}

export default Portfolio;