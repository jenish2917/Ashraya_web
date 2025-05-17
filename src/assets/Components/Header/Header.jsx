// import { useState } from "react"
import styles from "./Header.module.css"
import { Link, useLocation, useNavigate } from "react-router-dom"

export default function Header() {
  // const [home,setHome] = useState(false)  
  const location = useLocation()
  const navigate = useNavigate()

   const isHomePage = location.pathname === '/'

   function gotoHome(){
    navigate("/");
   }
  return (
    <>
      <header className="navbar navbar-expand-md w-100">
        {!isHomePage ? <div className={styles.header}>
            <div id="h" >
                <img src={`${import.meta.env.BASE_URL}loggo.svg`} alt="Company Logo" id={styles.headerLogo} onClick={gotoHome}/>
            </div>
            <h1 className={styles.headerContent} onClick={gotoHome}>Ashraya Architects</h1>
        </div> : ""}    
        <button
           className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar" 
          ><span className="navbar-toggler-icon"> 
        </span></button>
        <nav className={`collapse navbar-collapse ${styles.headerLink} ` } id="mynavbar" style={isHomePage ? {paddingTop : "14px"} : {}}>
            <ul>
            <li >
              <Link
                to="#"
                role="button"
                id="dropDown1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Practice 
              </Link>
              <ul className={`dropdown-menu ${styles.submenu}`} aria-labelledby="dropDown1">
                <li>
                  <Link to="/About" className="dropdown-item">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item">
                    People
                  </Link>
                </li>
                <br />
                <li>
                  <Link to="#" className="dropdown-item">
                    Office
                  </Link>
                </li>
              </ul>
            </li>
                <li>
                    <Link to="/Careers" role="button"
                id="dropDown1"
                data-bs-toggle="dropdown"
                aria-expanded="false">Work</Link>
                    <ul className={`dropdown-menu ${styles.submenu}`}>
                        {/* <li><Link to="#" className="dropdown-item">Early Projects</Link></li> */}
                        <li><Link to="/Architecture" className="dropdown-item">Architecture</Link></li>
                        <li><Link to="#" className="dropdown-item">Urbanism</Link></li>
                        <li><Link to="#" className="dropdown-item">Research</Link></li>
                       
                        {/* <li><Link to="#"className="dropdown-item">Project List</Link></li> */}
                    </ul>
                </li>
                <li>
                    <Link to="/News">News</Link>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}