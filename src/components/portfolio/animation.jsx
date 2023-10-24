const initialValue = { opacity: 0, y: 75 };
const initialValueFromLeft = { opacity: 0, x: 75 };

const transitionValue = {
    duration: 1,
    delayChildren: 0.5,
    when: "beforeChildren",
    staggerChildren: 0.9
};

const pageVariants = {
    hidden: {
        opacity: 0,
        y: 75
    },
    visible: {
        opacity: 1,
        y: 0,

        transition: {
            staggerChildren: 0.2
        }

    }
}


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

export { initialValue, initialValueFromLeft, transitionValue, pageVariants }