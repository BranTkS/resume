const Academics = () => {

    const academics = [
        {
            school: "UNISA",
            learnings: "Diploma in information technology",
            story: "Distinction in app development and many other modules"
        },
        {
            school: "ANDELA SCHOLARSHIP PROGRAMS",
            learnings: "web and app development",
            story: <ul className="text-end">
                <li>We were taught how to make
                    android applications using
                    Java, both individually and
                    in teams. The program
                    started with over 400 000
                    applicants and I made it to
                    through final round.</li>
                <li>I also took part in their
                    challenges sponsored by
                    Facebook, Google and
                    Microsoft.</li>
                <li>In the challenges we made
                    React JS websites, Android
                    applications and MERN Stack
                    projects in teams.
                </li>
                <li>Completed the Azure
                    fundamentals training
                    program hosted by Microsoft
                </li>
                <li>Completed Google cloud
                    training hosted by andela
                    and Google.
                </li>
            </ul>
        }
    ];

    const allAcademics = academics.map((academics) => {

        return (
            <ul key={academics.school}>
                <li>
                    <div className="row">
                        <h1 id="title1" className="col-md-4 h2 text-start">{academics.school}</h1>

                        <div className="col-md-8 ">
                            <h1 className="h4 text-end">{academics.learnings}</h1>

                            <p>{academics.story}</p>
                        </div>
                    </div>
                </li>
            </ul>
        )
    });

    return (
        <div className="container-fluid">
            <h1 className="h2">Academic History</h1>
            {allAcademics}
        </div>
    )
}

export default Academics;