const Academics = () => {

    return (
        <>
            <h1 className="h2">Academic History</h1>
            <ul>
                <li><div className="academicList">
                    <h1 id="title1" className=" h2 text-start">UNISA</h1>
                    <h1 className="h4 text-end">Diploma in information
                        technology</h1>
                    <p>Distinction in app
                        development and many other
                        modules</p>
                </div></li>

                <li><div className="academicList">
                    <h1 id="title1" className="h2 text-start">ANDELA SCHOLARSHIP
                        PROGRAMS</h1>
                    <h1 className="h4 text-end">web and app development</h1>
                    <p><ul className="text-end">
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
                    </ul></p>
                </div></li>
            </ul>
        </>
    )
}

export default Academics;