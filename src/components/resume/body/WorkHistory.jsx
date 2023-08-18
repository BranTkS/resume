const WorkHistory = () => {

    const history = [{
        workTitle: "FREELANCE WEBSITE AND APP DEVELOPER",
        workLength: "(2017-present)",
        workDescription: "I made apps and websites for clients and selfeducation. I worked individually and within teams."
    },
    {
        workTitle: "MANAGER",
        workLength: "oct 2021 - March 2022",
        workDescription: "Afros Chicken Shop Sandton."
    },
    {
        workTitle: "ASSISTANT MANAGER",
        workLength: "Oct 2019 – Feb 2020",
        workDescription: "Afros Chicken Shop Midrand."
    },
    {
        workTitle: "DATA CAPTURE",
        workLength: "December - 2018",
        workDescription: "Clientele life holiday job."
    },
    {
        workTitle: " CUSTOMER SERVICE AGENT",
        workLength: "June 2018 – Dec 2018",
        workDescription: " Amazon (-Remote-), we handled calls from their U.S customer base."
    }]

    const experience = history.map((history) => {

        return (
            <div key={history.workTitle}>
                <p className="workHistoryTitle">
                    {history.workTitle}
                </p>
                <p className="workLength">
                    {history.workLength}

                </p>
                <p>{history.workDescription}</p>
            </div>
        )
    })
    return (
        <div className="workLayout">
            <div className="container-fluid">

                <h1 className="title">Work History</h1>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        {experience}
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    )
}

export default WorkHistory;