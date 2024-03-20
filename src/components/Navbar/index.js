import "./style.css";

export const Navbar = ()=>{
    return(
        <header className="heading">
            <div className="heading-1">
                <h1><a className="link" href="/">
                Travel
                </a></h1>
            </div>
            <div className="search-container">
                <span className="">Anywhere hotel</span>
                <span className="right-border"></span>
                <span className="">Anywhere Room</span>
                <span className="right-border"></span>
                <span className="">Anywhere Location</span>
                
                <span className="material-symbols-outlined search-icon">
                    search
                </span>
              
            </div>
            <nav className="nav">
                <div className="btn-container">
                    <span className="material-symbols-outlined menu">
                        menu
                    </span>
                    <span className="material-symbols-outlined person">
                        person
                    </span>
                </div>
            </nav>
        </header>
    )
}


