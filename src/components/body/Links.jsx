const Links = () => {

    return (
        <>
            <div className="title">Links</div>
            <div className="row" id="linkContent">
                <div className="col-md-5 text-start" ><a href="https://www.linkedin.com/in/brandon-shumba/" target="_blank" rel="noreferrer">
                    <p className="linkTitle">Linked-in</p>
                    <p>https://www.linkedin.com/in/brandon-shumba/</p>
                </a>
                </div>

                <div className="col-md-2 text-end"></div>
                <div className="col-md-5 text-end">
                    <a href="https://github.com/BranTkS" target="_blank" rel="noreferrer">
                        <p className="linkTitle">Github</p>
                        <p>https://github.com/BranTkS</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Links;