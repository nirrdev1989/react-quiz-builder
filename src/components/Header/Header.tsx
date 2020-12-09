import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
   return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
               <Link className="navbar-brand" to="/" >Quiz Builder</Link>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link" to="/quizzes-list" >Quizzes list</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   )
}

export default Header