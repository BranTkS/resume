const Academics = () => {

    const academics = [
        {
            school: "UNISA",
            learnings: "Diploma in information technology",
            story: "Distinction in app development and many other modules"
        },
        {
            school: "Umuzi",
            learnings: "Umuzi Java bootcamp",
            story: "I completed the Umuzi java bootcamp and came out among the top students to be selected for the program, guaranteeing that as a baseline, I have a very strong understanding of the fundamentals of OOP."
        },
        {
            school: "ANDELA SCHOLARSHIP PROGRAMS",
            learnings: "Web and app development",
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
                        <h1 id="subtitle" className="col-md-3 h2 text-start">{academics.school}</h1>

                        <div className="col-md-1 "></div>
                        <div className="col-md-8 ">
                            <h1 className="h4 text-end">{academics.learnings}</h1>

                            <div>{academics.story}</div>
                        </div>
                    </div>
                </li>
            </ul>
        )
    });

    return (
        <div className="container-fluid">
            <h1 className="title">Academic History</h1>
            {allAcademics}
        </div>
    )
}

export default Academics;