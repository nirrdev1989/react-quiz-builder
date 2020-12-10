import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'

function Header() {

   const quizzesCount = useSelector((state: RootState) => Object.keys(state.quizzes).length)

   return (
      <div>
         <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
               <Link className="navbar-brand" to="/" >Quiz Builder</Link>
               <ul className="navbar-nav ">
                  <li className="nav-item">
                     <Link
                        className="nav-link mr-5"
                        to="/quizzes-list" >
                        Quizzes list
                        &nbsp;
                     <span className="badge bg-success"> {quizzesCount}</span>
                     </Link>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   )
}

export default Header