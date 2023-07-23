import NameHeader from './NameHeader'
import ContactDetails from './Contact-details'
import WorkHistory from './WorkHistory'
import Portfolio from './Portfolio'
import Academics from './academics/Academics'

import './resumeBody.scss'

const ResumeBody = () => {


    return (
        <>
            <div className='resumeBody'>
                <NameHeader />
                <ContactDetails />
                <WorkHistory />
                <Portfolio />
                <Academics />
            </div>
        </>
    )
}

export default ResumeBody
